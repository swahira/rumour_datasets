const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '../data');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

class DB {
  constructor(collectionName) {
    this.filePath = path.join(DATA_DIR, `${collectionName}.json`);
    if (!fs.existsSync(this.filePath)) {
      fs.writeFileSync(this.filePath, JSON.stringify([]));
    }
  }

  async read() {
    try {
      const data = await fs.promises.readFile(this.filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      console.error(`Error reading ${this.filePath}:`, error);
      return [];
    }
  }

  async write(data) {
    try {
      await fs.promises.writeFile(this.filePath, JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(`Error writing to ${this.filePath}:`, error);
    }
  }

  async findAll() {
    return await this.read();
  }

  async findById(id) {
    const data = await this.read();
    return data.find(item => item.id === id || item.id === parseInt(id));
  }

  async insert(item) {
    const data = await this.read();
    const newItem = {
      ...item,
      id: data.length > 0 ? Math.max(...data.map(i => i.id || 0)) + 1 : 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    data.push(newItem);
    await this.write(data);
    return newItem;
  }

  async update(id, updates) {
    const data = await this.read();
    const index = data.findIndex(item => item.id === id || item.id === parseInt(id));
    if (index === -1) return null;

    data[index] = {
      ...data[index],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    await this.write(data);
    return data[index];
  }

  async delete(id) {
    const data = await this.read();
    const index = data.findIndex(item => item.id === id || item.id === parseInt(id));
    if (index === -1) return false;

    data.splice(index, 1);
    await this.write(data);
    return true;
  }
}

module.exports = DB;

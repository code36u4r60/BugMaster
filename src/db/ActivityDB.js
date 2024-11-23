export class ActivityDB {
  constructor() {
    if (!ActivityDB.instance) {
      this.data = [];
      ActivityDB.instance = this;
    }
    return ActivityDB.instance;
  }

  static getInstance() {
    if (!ActivityDB.instance) {
      ActivityDB.instance = new ActivityDB();
    }
    return ActivityDB.instance;
  }

  create(activity) {
    this.data.push(activity);
  }

  getAll() {
    return this.data;
  }

  get(id) {
    return this.data.find((activity) => activity.id === id);
  }

  update(id, updatedActivity) {
    const activity = this.data.find((activity) => activity.id === id);
    if (activity) {
      Object.assign(activity, updatedActivity);
    }
  }

  delete(id) {
    const index = this.data.findIndex((activity) => activity.id === id);
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }
}

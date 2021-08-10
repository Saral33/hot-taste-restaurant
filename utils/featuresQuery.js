class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const title = this.queryStr.search
      ? {
          title: {
            $regex: this.queryStr.search,
            $options: 'i',
          },
        }
      : {};

    this.query = this.query.find(title);

    return this;
  }

  filter() {
    const str = { ...this.queryStr };
    const excludedFields = ['search', 'page', 'sort'];
    excludedFields.forEach((el) => delete str[el]);
    if (str.category === 'undefined') {
      this.query = this.query.find({});
    } else {
      this.query = this.query.find(str);
    }

    return this;
  }

  pagination(limit) {
    const page = Number(this.queryStr.page) || 1;

    const skip = (page - 1) * limit;
    console.log(skip);
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }

  sort() {
    if (this.queryStr.sort) {
      const sort = this.queryStr.sort.split(',').join(' ');
      this.query = this.query.sort(sort);
    } else {
      this.query = this.query;
    }
    return this;
  }
}

export default ApiFeatures;

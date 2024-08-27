const generateInsertSql = (tableName, object) => {
  console.log("fiaskdlkasjdaslkd");
  let columns = "";
  let values = "";
  let keys = Object.keys(object).filter((key) => object[key] !== undefined);
  keys.map((key, index) => {
    if (object[key]) {
      if (index === keys.length - 1) {
        columns += `${key}`;
        if (typeof object[key] === "number") {
          values += `${object[key]}`;
        } else {
          values += `'${object[key]}'`;
        }
      } else {
        columns += `${key},`;
        if (typeof object[key] === "number") {
          values += `${object[key]},`;
        } else {
          values += `'${object[key]}',`;
        }
      }
    }
  });
  return `insert into ${tableName} (${columns}) values(${values}) `;
};

const generateUpdateSql = (tableName, obj, where) => {
  let query = "";

  let keys = Object.keys(obj).filter((key) => obj[key] !== undefined);

  console.log(keys, obj);
  keys.map((key, index) => {
    if (obj[key]) {
      if (index === keys.length - 1) {
        if (typeof obj[key] === "number") {
          query += `${key}=${obj[key]}`;
        } else {
          query += `${key}='${obj[key]}'`;
        }
      } else {
        if (typeof obj[key] === "number") {
          query += `${key}=${obj[key]},`;
        } else {
          query += `${key}='${obj[key]}',`;
        }
      }
    }
  });
  return `update ${tableName} set ${query} where ${where}`;
};

const generateQuerySql = (tableName, where) => {
  return `select * from '${tableName}' where ${where} `;
};

module.exports = { generateInsertSql, generateQuerySql, generateUpdateSql };

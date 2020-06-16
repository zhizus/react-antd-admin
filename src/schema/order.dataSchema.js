import React from 'react';
import {Link} from 'react-router';

module.exports = [
  {
    key: 'id',
    title: 'ID',
    dataType: 'int',
    primary: true,
    // 当前列如何渲染
    render(text) {
      // 只是一个例子, 说明下render函数中可以用this, 甚至可以this.setState之类的
      // 我会把this绑定到当前的InnerTable组件上
      // 但需要注意, 如果要使用this, render必须是普通的函数, 不能是箭头函数, 因为箭头函数不能手动绑定this
      // this不要滥用, 搞出内存泄漏就不好了
      // render应该尽量是一个纯函数, 不要有副作用
      // console.log(this.props.tableName);
      return text;
    },
    // 表格中根据这一列排序, 排序规则可以配置
    sorter: (a, b) => a.id - b.id,
  },
  {
    key: 'accessId',
    title: '业务接入Id',
    dataType: 'int',
    // 默认值, 可以是string也可以是string array, 跟max有关
    max: 100000,
    min: 1,
  },
  {
    key: 'kugouId',
    title: 'kugouId',
    dataType: 'int',
    // 默认值, 可以是string也可以是string array, 跟max有关
    max: 1000000,
    min: 10000000,
  },
  {
    key: 'accessName',
    title: 'accessName',
    dataType: 'varchar',
    showType: 'select',
    options: [{key: 'lan', value: '摇一摇'}, {key: 'zhai', value: '浪漫旅程'}],
  },
  {
    key: 'createTime',
    title: '创建日期',
    dataType: 'datetime',
    defaultValue: '2017-01-01 11:22:33',
  },
];

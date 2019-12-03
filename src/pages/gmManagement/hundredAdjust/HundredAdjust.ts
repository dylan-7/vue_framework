import { Component, Vue } from 'vue-property-decorator';

/**
 *
 * @file 百人调控
 * @export
 * @class HundredAdjust
 * @extends {Vue}
 */
@Component
export default class HundredAdjust extends Vue {
  readonly tableColumn = [
    {
      title: '姓名1',
      key: 'name'
    },
    {
      title: '年龄1',
      key: 'age'
    },
    {
      title: '地址1',
      key: 'address'
    }
  ];

  private tableData: TableData[] = [
    {
      name: '王小明',
      age: 18,
      address: '北京市朝阳区芍药居'
    },
    {
      name: '张小刚',
      age: 25,
      address: '北京市海淀区西二旗'
    },
    {
      name: '李小红',
      age: 30,
      address: '上海市浦东新区世纪大道'
    },
    {
      name: '周小伟',
      age: 26,
      address: '深圳市南山区深南大道'
    }
  ];
}

interface TableData {
  name: string; // 姓名
  age: number; // 年龄
  address: string; // 地址
}

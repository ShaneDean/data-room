
// 配置版本号
const version = '2023111401'
// 分类
const category = 'Radar'
// 标题
const title = '基础雷达图'
// 类别， new Line()
const chartType = 'Radar'
// 用于标识，唯一，title的中文转拼音
const name = 'JiChuLeiDaTu'

// 右侧配置项
const setting = [
  {
    label: '维度',
    // 设置组件类型， select / input / colorPicker
    type: 'select',
    // 字段
    field: 'xField',
    optionField: 'xField', // 对应options中的字段
    // 是否多选
    multiple: false,
    // 绑定的值
    value: '',
    // tab页。 data: 数据， custom: 自定义
    tabName: 'data'
  },
  {
    label: '指标',
    // 设置组件类型
    type: 'select',
    // 字段
    field: 'yField',
    // 对应options中的字段
    optionField: 'yField',
    // 是否多选
    multiple: false,
    value: '',
    tabName: 'data'
  },
  /** 样式配置 **/
  // 图表 graph
  {
    label: '面积填充',
    type: 'switch', // 设置组件类型
    field: 'area', // 字段
    optionField: 'area', // 对应options中的字段
    value: 1,
    active: 1,
    inactive: 0,
    tabName: 'custom',
    groupName: 'graph'
  },
  {
    label: '是否平滑',
    type: 'switch', // 设置组件类型
    field: 'smooth', // 字段
    optionField: 'smooth', // 对应options中的字段
    value: false,
    active: true,
    inactive: false,
    tabName: 'custom',
    groupName: 'graph'
  },
  {
    label: '颜色',
    type: 'gradual', // 设置组件类型
    field: 'color', // 字段
    optionField: 'color', // 对应options中的字段
    value: 'l(0) 0:#648ff7 1:#648ff7',
    tabName: 'custom',
    groupName: 'graph'
  },
  {
    label: '数据点形状',
    type: 'select', // 设置组件类型
    field: 'point_shape', // 字段
    optionField: 'point.shape', // 对应options中的字段
    // 是否多选
    multiple: false,
    value: 'circle',
    tabName: 'custom',
    options: [
      {
        label: '无',
        value: false
      },
      {
        label: '空心圆',
        value: 'hollow-circle'
      },
      {
        label: '圆形',
        value: 'circle'
      },
      {
        label: '正方形',
        value: 'square'
      },
      {
        label: '菱形',
        value: 'diamond'
      },
      {
        label: '三角形',
        value: 'triangle'
      },
      {
        label: '六边形',
        value: 'hexagon'
      },
      {
        label: '菱形交叉',
        value: 'bowtie'
      },
      {
        label: '十字形',
        value: 'cross'
      },
      {
        label: 'I形',
        value: 'tick'
      },
      {
        label: '加号',
        value: 'plus'
      },
      {
        label: '连字号',
        value: 'hyphen'
      }
    ],
    groupName: 'graph'
  },
  {
    label: '数据点颜色',
    type: 'colorPicker', // 设置组件类型
    field: 'point_style_fill', // 字段
    optionField: 'point.style.fill', // 对应options中的字段
    value: '#fff',
    tabName: 'custom',
    groupName: 'graph'
  },
  {
    label: '数据点大小',
    type: 'inputNumber', // 设置组件类型
    field: 'point_size', // 字段
    optionField: 'point.size', // 对应options中的字段
    value: 2,
    tabName: 'custom',
    groupName: 'graph'
  },
  {
    label: '数据标签',
    type: 'switch', // 设置组件类型
    field: 'label_style_opacity', // 字段
    optionField: 'label.style.opacity', // 对应options中的字段
    value: 0,
    active: 1,
    inactive: 0,
    tabName: 'custom',
    groupName: 'graph'
  },
  {
    label: '数据标签颜色',
    type: 'colorPicker', // 设置组件类型
    field: 'label_style_fill', // 字段
    optionField: 'label.style.fill', // 对应options中的字段
    value: '#ffffff',
    tabName: 'custom',
    groupName: 'graph'
  },
  {
    label: '数据标签大小',
    // 设置组件类型
    type: 'inputNumber',
    // 字段
    field: 'label_style_fontSize',
    // 对应options中的字段
    optionField: 'label.style.fontSize',
    value: 12,
    tabName: 'custom',
    groupName: 'graph'
  },

  // x轴 xAxis
  {
    label: '显示外层圆圈',
    type: 'switch',
    field: 'xAxis_lineEnabled',
    optionField: 'xAxis.lineEnabled',
    value: false,
    active: true,
    inactive: false,
    tabName: 'custom',
    groupName: 'grid'
  },
  {
    label: '奇数圈底色',
    type: 'colorPicker', // 设置组件类型
    field: 'yAxis_grid_alternateColor1', // 字段
    optionField: 'yAxis.grid.alternateColor1', // 对应options中的字段
    value: 'rgba(0, 0, 0, 0.04)',
    tabName: 'custom',
    groupName: 'grid'
  },
  {
    label: '偶数圈底色',
    type: 'colorPicker', // 设置组件类型
    field: 'yAxis_grid_alternateColor2', // 字段
    optionField: 'yAxis.grid.alternateColor2', // 对应options中的字段
    value: 'rgba(0, 0, 0, 0.04)',
    tabName: 'custom',
    groupName: 'grid'
  },
  // 内边距 appendPadding
  {
    label: '',
    type: 'appendPadding',
    field: 'appendPadding',
    optionField: 'appendPadding',
    value: [0, 0, 0, 0],
    tabName: 'custom',
    groupName: 'appendPadding'
  }
]

// 模拟数据
const data = [
  { name: 'G2', star: 10371 },
  { name: 'G6', star: 7380 },
  { name: 'F2', star: 7414 },
  { name: 'L7', star: 2140 },
  { name: 'X6', star: 660 },
  { name: 'AVA', star: 885 },
  { name: 'G2Plot', star: 1626 }
]

// 配置处理脚本
const optionHandler = `
if (option.xAxis.lineEnabled) {
  option.xAxis.line = {}
} else {
  option.xAxis.line = null
}
option.yAxis.grid.alternateColor = [option.yAxis.grid.alternateColor1, option.yAxis.grid.alternateColor2]
`


// 数据处理脚本
const dataHandler = ''

// 图表配置 new Line('domName', option)
const option = {
  // 数据将要放入到哪个字段中
  dataKey: 'data',
  // 图表内边距
  appendPadding: [0, 0, 0, 0],
  data,
  xField: 'name',
  yField: 'star',
  smooth: false,
  color: 'l(0) 0:#648ff7 1:#648ff7',
  theme: {
    styleSheet: {
      backgroundColor: ''
    }
  },
  meta: {
    value: {
      alias: '数据',
      min: 0,
      nice: true,
      formatter: (v) => Number(v).toFixed(2)
    }
  },
  xAxis: {
    lineEnabled: false,
    line: {},
    tickLine: null,
    grid: {
      line: {
        style: {
          lineDash: null,
        },
      },
    },
  },
  yAxis: {
    // line: null,
    tickLine: null,
    label: false,
    grid: {
      line: {
        type: 'line',
        style: {
          lineDash: null,
        },
      },
      alternateColor1: 'rgba(0, 0, 0, 0.04)',
      alternateColor2: 'rgba(0, 0, 0, 0.04)',
      alternateColor: ['rgba(0, 0, 0, 0.04)','rgba(0, 0, 0, 0.04)'],
    },
  },
  // 开启辅助点
  point: {
    style: {
      fill: '#fff'
    },
    shape: '',
    size: 2
  },
  area: 1,
  label: {
    autoRotate: false,
    style: {
      fill: '#ffffff',
      opacity: 1,
      fontSize: 12
    }
  }
}

export default {
  category,
  version,
  title,
  chartType,
  name,
  option,
  setting,
  dataHandler,
  optionHandler
}

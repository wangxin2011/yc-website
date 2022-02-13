
import {parseTime} from '@/utils/index'
const tableMixin = {
  props:{
    data:{
        type: Object,
        default: () => {
            return {}
        }
      }
  },
  data(){
    return{
      time: ''
    }
  },
  computed: {
     // 表单数据
     listData(){
      let _data = this.data
      let _listStr = _data['form_json'] || '[]'
      let _list = []
      try{
        _list = JSON.parse(_listStr)
      }catch( err){

      }
      // 合计金额
      let _totalAmount = 0;
      for(let i = 0; i < _list.length; i++){
          let _item = _list[i]
          // 检查是否有价格，有价格才进行合计
          if(_item['amount'] && ['t1998', 't1999', 't2000'].indexOf(_item['id'] == -1)){
              _totalAmount = _totalAmount + parseFloat(_item['amount'])
          }
      }
      // 倒数第四行
      _list.push({id: 't1997', time: '', name:'备注', number: 1, unit: '', amount: 0, remarks: _data['remarks'], status1: false, status2: false, desc: ''})
      // 倒数第三行
      _list.push({id: 't1998', timeTitle: '到货时间', totalAmount: _totalAmount.toFixed(2), time: _data['arrival_time'], name:'采购总金额（元）', number: 1, unit: '', amount: 0, remark: '', status1: false, status2: false, desc: ''})
      // 倒数第二行
      _list.push({id: 't1999',time: '', name:'参与政府统一招标', number: 1, unit: '', amount: 0, remark: '', status1: false, status2: false, desc: ''})
      // 最后一行
      _list.push({id: 't2000', name:'高新区教育事业发展中心审批意见', number: 1, unit: '台', amount: 0, remark: _data['remark'], status1: false, status2: false, desc: ''})
      this.time = parseTime(_data['create_time'], '{y}年{m}月{d}日')
      return _list
    }
  },
  methods: {
    // 合并行列
    spanMethod({ row, column, rowIndex, columnIndex }){
      // 处理最后三行数据
      // if(rowIndex == this.listData.length - 3){
      //     // 倒数第三行
      //     if (columnIndex === 1) {
      //         return [1, 2];
      //     }else if (columnIndex === 2) {
      //         return [1, 3];
      //     } else if (columnIndex === 5) {
      //         return [1, 1];
      //     } else if (columnIndex === 8) {
      //         return [1, 3];
      //     } else {
      //         return [0, 0];
      //     }
      // }else if(rowIndex == this.listData.length - 1 || rowIndex == this.listData.length - 2 || rowIndex == this.listData.length - 4){
      //     // 倒数第一行和倒数第二行一样
      //     if (columnIndex === 1) {
      //         return [1, 2];
      //     } else if(columnIndex === 2){
      //         return [1, 8];
      //     }else{
      //         return [0, 0];
      //     }
      // }
        if(rowIndex == this.listData.length - 4){
            // 倒数第四行
            if (columnIndex === 0) {
                return [1, 2];
            } else if(columnIndex === 2){
                return [1, 8];
            }else{
                return [0, 0];
            }
        } else if(rowIndex == this.listData.length - 3){
            // 倒数第三行
            if (columnIndex === 0) {
                return [1, 2];
            }else if (columnIndex === 2) {
                return [1, 3];
            } else if (columnIndex === 5) {
                return [2, 1];
            } else if (columnIndex === 8) {
                return [2, 3];
            } else {
                return [0, 0];
            }
        }else if(rowIndex == this.listData.length - 2){
            // 倒数第二行
            if (columnIndex === 0) {
                return [1, 2];
            } else if(columnIndex === 2){
                return [1, 3];
            } else{
                return [0, 0];
            }
        }else if(rowIndex == this.listData.length - 1 ){
          // 倒数第一行
          if (columnIndex === 0) {
              return [1, 5];
          } else if(columnIndex === 5){
              return [1, 4];
          }else{
              return [0, 0];
          }
        }
        // 列合并
        if (columnIndex === 0) {
          // 合并第一列
          if (rowIndex === 0) {
            return {
              rowspan: this.listData.length - 4,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
        } 
    },
    
  }
}
const printTableMixin = {
  props:{
    data:{
        type: Object,
        default: () => {
            return {}
        }
      }
  },
  data(){
    return{
      time: ''
    }
  },
  computed: {
     // 表单数据
     listData(){
      let _data = this.data
      let _listStr = _data['form_json'] || '[]'
      let _list = []
      try{
        _list = JSON.parse(_listStr)
      }catch( err){

      }
      // 合计金额
      let _totalAmount = 0;
      for(let i = 0; i < _list.length; i++){
          let _item = _list[i]
          // 检查是否有价格，有价格才进行合计
          if(_item['amount'] && ['t1998', 't1999', 't2000'].indexOf(_item['id'] == -1)){
              _totalAmount = _totalAmount + parseFloat(_item['amount'])
          }
      }
      // 倒数第三行
      _list.push({id: 't1998', timeTitle: '到货时间', totalAmount: _totalAmount.toFixed(2), time: _data['arrival_time'], name:'采购总金额（元）', number: 1, unit: '', amount: 0, remark: '', status1: false, status2: false, desc: ''})
      // 倒数第二行
      _list.push({id: 't1999',time: '', name:'参与政府统一招标', number: 1, unit: '', amount: 0, remark: '', status1: false, status2: false, desc: ''})
      // 最后一行
      _list.push({id: 't2000', name:'高新区教育事业发展中心审批意见', number: 1, unit: '台', amount: 0, remark: _data['remark'], status1: false, status2: false, desc: ''})
      this.time = parseTime(_data['create_time'], '{y}年{m}月{d}日')
      return _list
    }
  },
  methods: {
    // 合并行列
    spanMethod({ row, column, rowIndex, columnIndex }){
      // 处理最后三行数据
      // 处理最后两行数据
      if(rowIndex == this.listData.length - 3){
          // 倒数第三行
          // if (columnIndex === 1) {
          //     return [1, 1];
          // }else if (columnIndex === 2) {
          //     return [1, 1];
          // } else 
          if (columnIndex === 4) {
              return [2, 1];
          // } else if (columnIndex === 5) {
          //     return [1, 1];
          } else if (columnIndex === 5) {
              return [2, 3];
          } else if (columnIndex > 5) {
              return [0, 0];
          }else {
              return [1, 1];
          }
      }else if(rowIndex == this.listData.length - 2){
          // 倒数第二行
          if (columnIndex >= 4) {
              return [0, 0];
          } else{
              return [1, 1];
          }
      }else if(rowIndex == this.listData.length - 1){
          // 倒数第一行
          if (columnIndex === 0) {
              return [1, 4];
          } else if(columnIndex === 4){
              return [1, 4];
          }else{
              return [0, 0];
          }
      }
      // 列合并
      if (columnIndex === 0) {
        // 合并第一列
        if (rowIndex === 0) {
          return {
            rowspan: this.listData.length - 3,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      } 
    },
  }
}
export { tableMixin, printTableMixin }

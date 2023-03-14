import $http from './index'

export const getData= $http.get('http://jsonplaceholder.typicode.com/posts')
//后面的地址是后端人员给的地址
export const login=(data)=>{
    return $http.get('http://jsonplaceholder.typicode.com/posts',data)
} 
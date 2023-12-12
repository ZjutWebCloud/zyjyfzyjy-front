import context from '@/context';
export function GetQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURI(r[2]);
  return null;
}

export function getHref(menu) {
  const { id, classpicview, classtype, classurl, hashcode, son, subMenus = [], classparent, classgrandparent } = menu;
  const hrefMap = new Map([
    ['0', `${context}/frontend/newsList.html?id=${id}&classpicview=${classpicview}&hashcode=flag&classtype=flag`],
    ['2', classurl],
    ['3', `${context}/frontend/newsList.html?id=${id}&hashcode=${hashcode}&classtype=flag&classpicview=flag`],
    //二级桥接类型
    ['1', `${context}/frontend/newsList.html?id=${son}&classtype=flag&hashcode=flag&classpicview=flag`],
  ]);

  if (classparent == '0' && classgrandparent == '0' && classtype == '1') {
    // 一级菜单桥接类型
    let sonMenu = subMenus.find(o => o.id == son);
    return sonMenu ? getHref(sonMenu) : 'javascript:void(0)';
  } else {
    return hrefMap.get(classtype) || 'javascript:void(0)';
  }
}

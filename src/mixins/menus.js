import { getMenus } from '../api/index';
export default {
  data() {
    return {
      menuList: [],
      orginMenuList: [],
      allSubTreeList: [],
    };
  },
  mounted: function() {
    this.getMenus();
  },
  methods: {
    async getMenus() {
      let orginList = await getMenus();
      this.orginMenuList = orginList;
      this.menuList = this.getMenuTree(orginList);
      this.allSubTreeList = this.getAllSubTree(orginList);
    },
    getMenuTree(menuList) {
      let menus = menuList.filter(
        o => o.classparent == '0' && o.classgrandparent == '0' && o.classviewtype == '导航显示'
      );
      return menus.map(o => {
        return {
          ...o,
          subMenus: menuList
            .filter(sub => sub.classparent == o.id && sub.classviewtype == '导航显示')
            .map(o => {
              return {
                ...o,
                subMenus: menuList.filter(sub => sub.classparent == o.id && sub.classviewtype == '导航显示'),
              };
            }),
        };
      });
    },
    getAllSubTreeById(rootId = 0, menuList) {
      let subMenus = [];
      for (let i = 0; i < menuList.length; i++) {
        let o = menuList[i];
        let { id, classparent } = o;
        if(classparent=== rootId){
          subMenus.push({
            ...o,
            subMenus: this.getAllSubTreeById(id, menuList)
          })
        }
      }
      return subMenus;
    },
    getAllSubTree(menuList) {
      let list = [];
      menuList.forEach(o=>{
        list.push({
          ...o,
          subMenus: this.getAllSubTreeById(o.id, menuList)
        })
      })
      return list;
    }
  },
};

module.exports = function(req, res) {
  var result;
  if (req.params.classid) {
    var id = req.body.classid;
    var articleList = ['203', '8', '91', '92', '132', '93', '94', '95']; //列表
    var picList = ['201', '88']; //图文
    var suoPic = ['205', '90']; //缩略图
    if (picList.indexOf(id) != -1) {
      result = {
        pageNum: 3,
        title: [],
        output: [
          {
            title: '2二级图文列表新闻2二级图文列表新闻二级图文列表新闻',
            publishTime: '2016-04-03',
            redtitle: '是',
            istop: '是',
            picture: 'http://i0.hdslb.com/bfs/archive/7bf6498475afb60adb1957f5af48f81e5d151210.jpg@320w_200h.webp',
            id: '68',
            hashcode: '1349957612',
            author: '腊肉',
            content:
              '二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻',
          },
          {
            title: '二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻',
            publishTime: '2016-04-03',
            redtitle: '否',
            istop: '否',
            content:
              '<p>二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻</p>',
            picture: 'http://i2.hdslb.com/bfs/archive/0296998e8fbbb69264d1fb36726acb8d6de04503.jpg@320w_200h.webp',
            id: '67',
            hashcode: '1873439983',
          },
          {
            title: '这是第三条测试数据这是第三条测试数据这是第三条测试数据',
            publishTime: '2016-04-03',
            redtitle: '否',
            istop: '否',
            content:
              '<p>二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻二级图文列表新闻</p>',
            picture: 'http://i2.hdslb.com/bfs/archive/0296998e8fbbb69264d1fb36726acb8d6de04503.jpg@320w_200h.webp',
            id: '67',
            hashcode: '1873439983',
          },
        ],
      };
    } //图文
    else if (articleList.indexOf(id) != -1) {
      if (req.body.pageInt != 1) {
        result = {
          pageNum: 3,
          title: [],
          output: [
            {
              title: '关于2011级研究生开学前相关事宜的通知',
              publishTime: '2016-05-10',
              redtitle: '否',
              istop: '否',
              content:
                '<p><a href="http://www.sppa.zjut.edu.cn/a/yanjiushengjiaoyu/20110926/103.html" class="title" style="padding: 0px; margin: 0px 0px 0px 2px; color: rgb(255, 106, 7); text-decoration: none; overflow: hidden; line-height: 25px; font-weight: bold; font-size: 14px; font-family: Verdana, Arial, Tahoma; white-space: normal; background-color: rgb(255, 255, 255);">关于2011级研究生开学前相关事宜的通知</a></p>',
              id: '101',
              hashcode: '1841797882',
            },
            {
              title: '关于2011级研究生开学前相关事宜的通知',
              publishTime: '2016-05-10',
              redtitle: '否',
              istop: '否',
              content:
                '<p><a href="http://www.sppa.zjut.edu.cn/a/yanjiushengjiaoyu/20110926/103.html" class="title" style="padding: 0px; margin: 0px 0px 0px 2px; color: rgb(255, 106, 7); text-decoration: none; overflow: hidden; line-height: 25px; font-weight: bold; font-size: 14px; font-family: Verdana, Arial, Tahoma; white-space: normal; background-color: rgb(255, 255, 255);">关于2011级研究生开学前相关事宜的通知</a></p>',
              id: '101',
              hashcode: '1841797882',
            },
            {
              title: '关于举行科技哲学2009级硕士生开题报告的通知',
              publishTime: '2016-05-10',
              redtitle: '是',
              istop: '是',
              content:
                '<p><a href="http://www.sppa.zjut.edu.cn/a/yanjiushengjiaoyu/20110926/109.html" class="title" style="padding: 0px; margin: 0px 0px 0px 2px; color: rgb(92, 92, 92); text-decoration: none; overflow: hidden; line-height: 25px; font-weight: bold; font-size: 14px; font-family: Verdana, Arial, Tahoma; white-space: normal; background-color: rgb(255, 255, 255);">关于举行科技哲学2009级硕士生开题报告的通知</a></p>',
              id: '100',
              hashcode: '340777374',
            },
            {
              title: '关于2011级研究生开学前相关事宜的通知',
              publishTime: '2016-05-10',
              redtitle: '否',
              istop: '否',
              content:
                '<p><a href="http://www.sppa.zjut.edu.cn/a/yanjiushengjiaoyu/20110926/103.html" class="title" style="padding: 0px; margin: 0px 0px 0px 2px; color: rgb(255, 106, 7); text-decoration: none; overflow: hidden; line-height: 25px; font-weight: bold; font-size: 14px; font-family: Verdana, Arial, Tahoma; white-space: normal; background-color: rgb(255, 255, 255);">关于2011级研究生开学前相关事宜的通知</a></p>',
              id: '101',
              hashcode: '1841797882',
            },
          ],
        };
      } else {
        result = {
          pageNum: 3,
          title: [],
          output: [
            {
              title: '关于举行科技哲学2009级硕士生开题报告的通知',
              publishTime: '2016-05-10',
              redtitle: '是',
              istop: '是',
              content:
                '<p><a href="http://www.sppa.zjut.edu.cn/a/yanjiushengjiaoyu/20110926/109.html" class="title" style="padding: 0px; margin: 0px 0px 0px 2px; color: rgb(92, 92, 92); text-decoration: none; overflow: hidden; line-height: 25px; font-weight: bold; font-size: 14px; font-family: Verdana, Arial, Tahoma; white-space: normal; background-color: rgb(255, 255, 255);">关于举行科技哲学2009级硕士生开题报告的通知</a></p>',
              id: '100',
              hashcode: '340777374',
            },
            {
              title: '关于做好2011年12月大学英语四、六级考试研究生报名工作的通知',
              publishTime: '2016-05-10',
              redtitle: '否',
              istop: '否',
              content:
                '<p><a href="http://www.sppa.zjut.edu.cn/a/yanjiushengjiaoyu/20110926/110.html" class="title" style="padding: 0px; margin: 0px 0px 0px 2px; color: rgb(92, 92, 92); text-decoration: none; overflow: hidden; line-height: 25px; font-weight: bold; font-size: 14px; font-family: Verdana, Arial, Tahoma; white-space: normal; background-color: rgb(255, 255, 255);">关于做好2011年12月大学英语四、六级考试研究生报名工作的通知</a></p>',
              id: '98',
              hashcode: '1614039340',
            },
            {
              title: '2012年政管学院硕士研究生入学考试自命题科目考试大纲',
              publishTime: '2016-05-10',
              redtitle: '否',
              istop: '否',
              content:
                '<p><a href="http://www.sppa.zjut.edu.cn/a/yanjiushengjiaoyu/20110926/85.html" class="title" style="padding: 0px; margin: 0px 0px 0px 2px; color: rgb(255, 106, 7); text-decoration: none; overflow: hidden; line-height: 25px; font-weight: bold; font-size: 14px; font-family: Verdana, Arial, Tahoma; white-space: normal; background-color: rgb(255, 255, 255);">2012年政管学院硕士研究生入学考试自命题科目考试大纲</a></p>',
              id: '99',
              hashcode: '1717152506',
            },
            {
              title: '2012年政管学院硕士研究生入学考试自命题科目考试大纲',
              publishTime: '2016-05-10',
              redtitle: '否',
              istop: '否',
              content:
                '<p><a href="http://www.sppa.zjut.edu.cn/a/yanjiushengjiaoyu/20110926/85.html" class="title" style="padding: 0px; margin: 0px 0px 0px 2px; color: rgb(255, 106, 7); text-decoration: none; overflow: hidden; line-height: 25px; font-weight: bold; font-size: 14px; font-family: Verdana, Arial, Tahoma; white-space: normal; background-color: rgb(255, 255, 255);">2012年政管学院硕士研究生入学考试自命题科目考试大纲</a></p>',
              id: '99',
              hashcode: '1717152506',
            },
            {
              title: '2012年政管学院硕士研究生入学考试自命题科目考试大纲',
              publishTime: '2016-05-10',
              redtitle: '否',
              istop: '否',
              content:
                '<p><a href="http://www.sppa.zjut.edu.cn/a/yanjiushengjiaoyu/20110926/85.html" class="title" style="padding: 0px; margin: 0px 0px 0px 2px; color: rgb(255, 106, 7); text-decoration: none; overflow: hidden; line-height: 25px; font-weight: bold; font-size: 14px; font-family: Verdana, Arial, Tahoma; white-space: normal; background-color: rgb(255, 255, 255);">2012年政管学院硕士研究生入学考试自命题科目考试大纲</a></p>',
              id: '99',
              hashcode: '1717152506',
            },
            {
              title: '2012年政管学院硕士研究生入学考试自命题科目考试大纲',
              publishTime: '2016-05-10',
              redtitle: '否',
              istop: '否',
              content:
                '<p><a href="http://www.sppa.zjut.edu.cn/a/yanjiushengjiaoyu/20110926/85.html" class="title" style="padding: 0px; margin: 0px 0px 0px 2px; color: rgb(255, 106, 7); text-decoration: none; overflow: hidden; line-height: 25px; font-weight: bold; font-size: 14px; font-family: Verdana, Arial, Tahoma; white-space: normal; background-color: rgb(255, 255, 255);">2012年政管学院硕士研究生入学考试自命题科目考试大纲</a></p>',
              id: '99',
              hashcode: '1717152506',
            },
            {
              title: '2012年政管学院硕士研究生入学考试自命题科目考试大纲',
              publishTime: '2016-05-10',
              redtitle: '否',
              istop: '否',
              content:
                '<p><a href="http://www.sppa.zjut.edu.cn/a/yanjiushengjiaoyu/20110926/85.html" class="title" style="padding: 0px; margin: 0px 0px 0px 2px; color: rgb(255, 106, 7); text-decoration: none; overflow: hidden; line-height: 25px; font-weight: bold; font-size: 14px; font-family: Verdana, Arial, Tahoma; white-space: normal; background-color: rgb(255, 255, 255);">2012年政管学院硕士研究生入学考试自命题科目考试大纲</a></p>',
              id: '99',
              hashcode: '1717152506',
            },
            {
              title: '2012年政管学院硕士研究生入学考试自命题科目考试大纲',
              publishTime: '2016-05-10',
              redtitle: '否',
              istop: '否',
              content:
                '<p><a href="http://www.sppa.zjut.edu.cn/a/yanjiushengjiaoyu/20110926/85.html" class="title" style="padding: 0px; margin: 0px 0px 0px 2px; color: rgb(255, 106, 7); text-decoration: none; overflow: hidden; line-height: 25px; font-weight: bold; font-size: 14px; font-family: Verdana, Arial, Tahoma; white-space: normal; background-color: rgb(255, 255, 255);">2012年政管学院硕士研究生入学考试自命题科目考试大纲</a></p>',
              id: '99',
              hashcode: '1717152506',
            },
            {
              title: '2012年政管学院硕士研究生入学考试自命题科目考试大纲',
              publishTime: '2016-05-10',
              redtitle: '否',
              istop: '否',
              content:
                '<p><a href="http://www.sppa.zjut.edu.cn/a/yanjiushengjiaoyu/20110926/85.html" class="title" style="padding: 0px; margin: 0px 0px 0px 2px; color: rgb(255, 106, 7); text-decoration: none; overflow: hidden; line-height: 25px; font-weight: bold; font-size: 14px; font-family: Verdana, Arial, Tahoma; white-space: normal; background-color: rgb(255, 255, 255);">2012年政管学院硕士研究生入学考试自命题科目考试大纲</a></p>',
              id: '99',
              hashcode: '1717152506',
            },
            {
              title: '2012年政管学院硕士研究生入学考试自命题科目考试大纲',
              publishTime: '2016-05-10',
              redtitle: '否',
              istop: '否',
              content:
                '<p><a href="http://www.sppa.zjut.edu.cn/a/yanjiushengjiaoyu/20110926/85.html" class="title" style="padding: 0px; margin: 0px 0px 0px 2px; color: rgb(255, 106, 7); text-decoration: none; overflow: hidden; line-height: 25px; font-weight: bold; font-size: 14px; font-family: Verdana, Arial, Tahoma; white-space: normal; background-color: rgb(255, 255, 255);">2012年政管学院硕士研究生入学考试自命题科目考试大纲</a></p>',
              id: '99',
              hashcode: '1717152506',
            },
          ],
        };
      }
    } //文字列表
    else if (suoPic.indexOf(id) != -1) {
      result = {
        pageNum: 3,
        title: [],
        output: [
          {
            title: '缩略图1',
            publishTime: '2016-04-06',
            redtitle: '否',
            istop: '否',
            content: '<p>啊实打实</p>',
            picture: 'http://i0.hdslb.com/group1/M00/B7/ED/oYYBAFfFS6WAUCWYAAFix04etSY369.jpg',
            id: '70',
            hashcode: '289625828',
          },
          {
            title: '缩略图2',
            publishTime: '2016-04-05',
            redtitle: '否',
            istop: '否',
            picture: 'http://i0.hdslb.com/group1/M00/B7/ED/oYYBAFfFS6WAUCWYAAFix04etSY369.jpg',
            id: '71',
            hashcode: '1',
          },
          {
            title: '这个图叫做叫做缩略图3',
            publishTime: '2016-04-05',
            redtitle: '否',
            istop: '否',
            picture: 'http://i0.hdslb.com/group1/M00/B7/ED/oYYBAFfFS6WAUCWYAAFix04etSY369.jpg',
            id: '71',
            hashcode: '1',
          },
          {
            title: '这个图叫做叫做缩略图4这个图叫做叫做缩略图4',
            publishTime: '2016-04-05',
            redtitle: '否',
            istop: '否',
            picture: 'http://i0.hdslb.com/group1/M00/B7/ED/oYYBAFfFS6WAUCWYAAFix04etSY369.jpg',
            id: '71',
            hashcode: '1',
          },
        ],
      };
    } //缩略图
    else if ((id = '125')) {
      result = studentWork;
    }
  } else {
    result = {
      pageNum: 3,
      title: [],
      output: [
        {
          title: '关于举行科技哲学2009级硕士生开题报告的通知',
          publishTime: '2016-05-10',
          redtitle: '是',
          istop: '是',
          titleurl: 'https://baidu.com',
          content:
            '<p><a href="http://www.sppa.zjut.edu.cn/a/yanjiushengjiaoyu/20110926/109.html" class="title" style="padding: 0px; margin: 0px 0px 0px 2px; color: rgb(92, 92, 92); text-decoration: none; overflow: hidden; line-height: 25px; font-weight: bold; font-size: 14px; font-family: Verdana, Arial, Tahoma; white-space: normal; background-color: rgb(255, 255, 255);">关于举行科技哲学2009级硕士生开题报告的通知</a></p>',
          id: '100',
          hashcode: '340777374',
        },
        {
          title: '关于举行科技哲学2009级硕士生开题报告的通知',
          publishTime: '2016-05-10',
          redtitle: '是',
          istop: '是',
          content:
            '关于举行科技哲学2009级硕士生开题报告的通知关于举行科技哲学2009级硕士生开题报告的通知关于举行科技哲学2009级硕士生开题报告的通知<p><a href="http://www.sppa.zjut.edu.cn/a/yanjiushengjiaoyu/20110926/109.html" class="title" style="padding: 0px; margin: 0px 0px 0px 2px; color: rgb(92, 92, 92); text-decoration: none; overflow: hidden; line-height: 25px; font-weight: bold; font-size: 14px; font-family: Verdana, Arial, Tahoma; white-space: normal; background-color: rgb(255, 255, 255);">关于举行科技哲学2009级硕士生开题报告的通知</a></p>',
          id: '100',
          hashcode: '340777374',
        },
        {
          title: '关于举行科技哲学2009级硕士生开题报告的通知',
          publishTime: '2016-05-10',
          redtitle: '是',
          istop: '是',
          content:
            '<p><a href="http://www.sppa.zjut.edu.cn/a/yanjiushengjiaoyu/20110926/109.html" class="title" style="padding: 0px; margin: 0px 0px 0px 2px; color: rgb(92, 92, 92); text-decoration: none; overflow: hidden; line-height: 25px; font-weight: bold; font-size: 14px; font-family: Verdana, Arial, Tahoma; white-space: normal; background-color: rgb(255, 255, 255);">关于举行科技哲学2009级硕士生开题报告的通知</a></p>',
          id: '100',
          hashcode: '340777374',
        },
        {
          title: '关于2011级研究生开学前相关事宜的通知',
          publishTime: '2016-05-10',
          redtitle: '否',
          istop: '否',
          content:
            '<p><a href="http://www.sppa.zjut.edu.cn/a/yanjiushengjiaoyu/20110926/103.html" class="title" style="padding: 0px; margin: 0px 0px 0px 2px; color: rgb(255, 106, 7); text-decoration: none; overflow: hidden; line-height: 25px; font-weight: bold; font-size: 14px; font-family: Verdana, Arial, Tahoma; white-space: normal; background-color: rgb(255, 255, 255);">关于2011级研究生开学前相关事宜的通知</a></p>',
          id: '101',
          hashcode: '1841797882',
        },
      ],
    };
  }
  res.json(result);
};

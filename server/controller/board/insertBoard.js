const { Board, User } = require("../../models");
const { checkAccessToken } = require("../../utils/jwt");
const serveToken = require("../../Functions/ServeToken");

module.exports = {
  post: async (req, res) => {
    // ERROR: 미로그인 상태
    // console.log("insert Board!!! ", req.session);
    const {accessToken, title, content} = req.body;
    console.log("aT",accessToken )
    if(!accessToken){
      return res.status(401).json({ message: "no" });
    }
    console.log('have aT com===========================')
    try{
      const {id, userId} = checkAccessToken(accessToken)

      const userInfo = await User.findOne({
        where: { userId: userId },
        attributes: ["id", "userId", "address"],
      });

      const userAddress = userInfo.dataValues.address.toString();
      console.log('useraddr' , userAddress);
      console.log('select com===========================')
      const result = await Board.create({
        title: title,
        user_id: id,
        content: content,
      })

      serveToken(userAddress);
      
      console.log('create com===========================')
      res.status(201).json({
        message: "Create board!",
        data: {
          userId: userInfo.userId,
          title: result.title,
          content: result.content,
          createdAt: result.createdAt + "+09:00",
          updatedAt: result.updatedAt + "+09:00",
        },
      });

    } catch(err) {
      console.log(err);
    }
    // if (!req.session.userId) {
    //   return res.status(401).json({ message: "Not authorized" });
    // }

    // try {
    //   const { title, content } = req.body;
    //   const userInfo = await User.findOne({
    //     where: { userId: req.session.userId },
    //     attributes: ["id", "userId"],
    //   });

    //   const result = await Board.create({
    //     title: title,
    //     user_id: userInfo.id,
    //     content: content,
    //   });

    //   res.status(201).json({
    //     message: "Create board!",
    //     data: {
    //       userId: userInfo.userId,
    //       title: result.title,
    //       content: result.content,
    //       createdAt: result.createdAt + "+09:00",
    //       updatedAt: result.updatedAt + "+09:00",
    //     },
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
  },
};

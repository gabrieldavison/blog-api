import User from "./src/models/userModel";
import Post from "./src/models/postModel";
import Comment from "./src/models/commentModel";
import bcrypt from "bcryptjs";

async function createContent() {
  await User.deleteMany({});
  await Post.deleteMany({});
  await Comment.deleteMany({});

  //Create test users
  try {
    const user1 = await new User({
      username: "user1",
      email: "user1@test.com",
      password: await bcrypt.hash("password", 10),
    }).save();

    const user2 = await new User({
      username: "user2",
      email: "user2@test.com",
      password: await bcrypt.hash("password", 10),
    }).save();

    const user3 = await new User({
      username: "user3",
      email: "user3@test.com",
      password: await bcrypt.hash("password", 10),
    }).save();

    //Creates Dummy Posts
    const post1user1 = await new Post({
      title: "User 1: Post 1",
      markdown: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum dignissim tortor. Ut a rutrum magna. Vestibulum sit amet mauris sed velit semper porta. Ut metus odio, placerat sed elit quis, volutpat finibus quam. Aliquam tristique porta sagittis. Nam pulvinar at nisl quis accumsan. Pellentesque pulvinar accumsan efficitur. Vestibulum pretium porttitor auctor. Mauris dapibus tempus tortor, eu tempus dolor. Integer tincidunt massa vel nibh auctor lacinia. Sed volutpat ex nunc, eu aliquam justo aliquet sit amet. Curabitur a finibus leo, in scelerisque magna. Curabitur in faucibus neque.

      Cras pharetra justo vitae rutrum pharetra. In ut suscipit eros. Phasellus dapibus leo ac ex dictum suscipit non quis neque. Duis luctus tellus ut odio bibendum, sed faucibus tellus maximus. Nulla vitae eleifend velit. Suspendisse ac aliquam ligula. Suspendisse erat lectus, vulputate quis massa facilisis, tincidunt scelerisque purus. Vivamus ut nulla arcu. In in felis nisi. Sed ut scelerisque nibh. Aenean sodales neque ac eros egestas gravida. Vivamus egestas consectetur quam, in commodo nunc tristique sit amet. Quisque auctor rutrum enim, vel mollis urna congue id.

      In hac habitasse platea dictumst. Sed suscipit tempus sem eu gravida. Maecenas efficitur pharetra turpis, ut molestie felis posuere non. Maecenas auctor nibh vel lectus laoreet, eget dignissim dolor feugiat. Vestibulum ut ornare velit, non auctor diam. Nulla facilisi. Donec id libero nisl. Proin ut neque orci. Quisque ante lectus, rutrum vel suscipit nec, molestie sit amet justo. Nullam nec purus ut massa rhoncus viverra vel ut nunc. Nullam hendrerit est a tortor pretium, at fringilla ex tristique. Vivamus laoreet efficitur risus, vitae bibendum dolor accumsan sit amet. Suspendisse et arcu vulputate, mollis lectus ac, auctor tellus. Nunc maximus laoreet enim, ac eleifend odio commodo quis.

      Praesent eget lacus a urna sodales hendrerit ut sed leo. Etiam nec dignissim tortor. Phasellus tempus nibh massa, sit amet mollis mauris vestibulum at. Vivamus faucibus nisi risus, et hendrerit nulla aliquam ac. Nulla sagittis cursus sapien, eu lobortis turpis accumsan eu. Curabitur tristique congue felis, et faucibus mauris volutpat eu. Maecenas malesuada, diam ac dignissim hendrerit, dolor leo mollis nulla, sed tincidunt ante nunc vel eros. In hac habitasse platea dictumst. Suspendisse condimentum mauris nec nisl pharetra elementum. Ut at nisi nec sapien ultrices ultrices vitae ut dui. Aliquam turpis tortor, sagittis sit amet gravida vitae, ornare vitae turpis. Nulla augue tortor, ultricies sed malesuada in, finibus vitae enim. Suspendisse potenti. Cras id velit blandit, vulputate dui nec, faucibus ante.

      Mauris eu efficitur turpis. Quisque ac massa cursus, cursus libero vitae, pellentesque enim. Maecenas ac dolor suscipit enim interdum vestibulum. Ut et ipsum nec nibh imperdiet fringilla in vel sem. Proin non egestas neque. Proin vehicula lectus magna, vitae fermentum augue sagittis venenatis. Ut eu pharetra dolor, vitae accumsan felis. 
    `,
      author: user1._id,
    }).save();

    const post2user1 = await new Post({
      title: "User 1: Post 2",
      markdown: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum dignissim tortor. Ut a rutrum magna. Vestibulum sit amet mauris sed velit semper porta. Ut metus odio, placerat sed elit quis, volutpat finibus quam. Aliquam tristique porta sagittis. Nam pulvinar at nisl quis accumsan. Pellentesque pulvinar accumsan efficitur. Vestibulum pretium porttitor auctor. Mauris dapibus tempus tortor, eu tempus dolor. Integer tincidunt massa vel nibh auctor lacinia. Sed volutpat ex nunc, eu aliquam justo aliquet sit amet. Curabitur a finibus leo, in scelerisque magna. Curabitur in faucibus neque.

      Cras pharetra justo vitae rutrum pharetra. In ut suscipit eros. Phasellus dapibus leo ac ex dictum suscipit non quis neque. Duis luctus tellus ut odio bibendum, sed faucibus tellus maximus. Nulla vitae eleifend velit. Suspendisse ac aliquam ligula. Suspendisse erat lectus, vulputate quis massa facilisis, tincidunt scelerisque purus. Vivamus ut nulla arcu. In in felis nisi. Sed ut scelerisque nibh. Aenean sodales neque ac eros egestas gravida. Vivamus egestas consectetur quam, in commodo nunc tristique sit amet. Quisque auctor rutrum enim, vel mollis urna congue id.

      In hac habitasse platea dictumst. Sed suscipit tempus sem eu gravida. Maecenas efficitur pharetra turpis, ut molestie felis posuere non. Maecenas auctor nibh vel lectus laoreet, eget dignissim dolor feugiat. Vestibulum ut ornare velit, non auctor diam. Nulla facilisi. Donec id libero nisl. Proin ut neque orci. Quisque ante lectus, rutrum vel suscipit nec, molestie sit amet justo. Nullam nec purus ut massa rhoncus viverra vel ut nunc. Nullam hendrerit est a tortor pretium, at fringilla ex tristique. Vivamus laoreet efficitur risus, vitae bibendum dolor accumsan sit amet. Suspendisse et arcu vulputate, mollis lectus ac, auctor tellus. Nunc maximus laoreet enim, ac eleifend odio commodo quis.

      Praesent eget lacus a urna sodales hendrerit ut sed leo. Etiam nec dignissim tortor. Phasellus tempus nibh massa, sit amet mollis mauris vestibulum at. Vivamus faucibus nisi risus, et hendrerit nulla aliquam ac. Nulla sagittis cursus sapien, eu lobortis turpis accumsan eu. Curabitur tristique congue felis, et faucibus mauris volutpat eu. Maecenas malesuada, diam ac dignissim hendrerit, dolor leo mollis nulla, sed tincidunt ante nunc vel eros. In hac habitasse platea dictumst. Suspendisse condimentum mauris nec nisl pharetra elementum. Ut at nisi nec sapien ultrices ultrices vitae ut dui. Aliquam turpis tortor, sagittis sit amet gravida vitae, ornare vitae turpis. Nulla augue tortor, ultricies sed malesuada in, finibus vitae enim. Suspendisse potenti. Cras id velit blandit, vulputate dui nec, faucibus ante.

      Mauris eu efficitur turpis. Quisque ac massa cursus, cursus libero vitae, pellentesque enim. Maecenas ac dolor suscipit enim interdum vestibulum. Ut et ipsum nec nibh imperdiet fringilla in vel sem. Proin non egestas neque. Proin vehicula lectus magna, vitae fermentum augue sagittis venenatis. Ut eu pharetra dolor, vitae accumsan felis. 
    `,
      author: user1._id,
    }).save();

    const post1user2 = await new Post({
      title: "User 2: Post 1",
      markdown: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum dignissim tortor. Ut a rutrum magna. Vestibulum sit amet mauris sed velit semper porta. Ut metus odio, placerat sed elit quis, volutpat finibus quam. Aliquam tristique porta sagittis. Nam pulvinar at nisl quis accumsan. Pellentesque pulvinar accumsan efficitur. Vestibulum pretium porttitor auctor. Mauris dapibus tempus tortor, eu tempus dolor. Integer tincidunt massa vel nibh auctor lacinia. Sed volutpat ex nunc, eu aliquam justo aliquet sit amet. Curabitur a finibus leo, in scelerisque magna. Curabitur in faucibus neque.

      Cras pharetra justo vitae rutrum pharetra. In ut suscipit eros. Phasellus dapibus leo ac ex dictum suscipit non quis neque. Duis luctus tellus ut odio bibendum, sed faucibus tellus maximus. Nulla vitae eleifend velit. Suspendisse ac aliquam ligula. Suspendisse erat lectus, vulputate quis massa facilisis, tincidunt scelerisque purus. Vivamus ut nulla arcu. In in felis nisi. Sed ut scelerisque nibh. Aenean sodales neque ac eros egestas gravida. Vivamus egestas consectetur quam, in commodo nunc tristique sit amet. Quisque auctor rutrum enim, vel mollis urna congue id.

      In hac habitasse platea dictumst. Sed suscipit tempus sem eu gravida. Maecenas efficitur pharetra turpis, ut molestie felis posuere non. Maecenas auctor nibh vel lectus laoreet, eget dignissim dolor feugiat. Vestibulum ut ornare velit, non auctor diam. Nulla facilisi. Donec id libero nisl. Proin ut neque orci. Quisque ante lectus, rutrum vel suscipit nec, molestie sit amet justo. Nullam nec purus ut massa rhoncus viverra vel ut nunc. Nullam hendrerit est a tortor pretium, at fringilla ex tristique. Vivamus laoreet efficitur risus, vitae bibendum dolor accumsan sit amet. Suspendisse et arcu vulputate, mollis lectus ac, auctor tellus. Nunc maximus laoreet enim, ac eleifend odio commodo quis.

      Praesent eget lacus a urna sodales hendrerit ut sed leo. Etiam nec dignissim tortor. Phasellus tempus nibh massa, sit amet mollis mauris vestibulum at. Vivamus faucibus nisi risus, et hendrerit nulla aliquam ac. Nulla sagittis cursus sapien, eu lobortis turpis accumsan eu. Curabitur tristique congue felis, et faucibus mauris volutpat eu. Maecenas malesuada, diam ac dignissim hendrerit, dolor leo mollis nulla, sed tincidunt ante nunc vel eros. In hac habitasse platea dictumst. Suspendisse condimentum mauris nec nisl pharetra elementum. Ut at nisi nec sapien ultrices ultrices vitae ut dui. Aliquam turpis tortor, sagittis sit amet gravida vitae, ornare vitae turpis. Nulla augue tortor, ultricies sed malesuada in, finibus vitae enim. Suspendisse potenti. Cras id velit blandit, vulputate dui nec, faucibus ante.

      Mauris eu efficitur turpis. Quisque ac massa cursus, cursus libero vitae, pellentesque enim. Maecenas ac dolor suscipit enim interdum vestibulum. Ut et ipsum nec nibh imperdiet fringilla in vel sem. Proin non egestas neque. Proin vehicula lectus magna, vitae fermentum augue sagittis venenatis. Ut eu pharetra dolor, vitae accumsan felis. 
    `,
      author: user2._id,
    }).save();

    const post2user2 = await new Post({
      title: "User 2: Post 2",
      markdown: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum dignissim tortor. Ut a rutrum magna. Vestibulum sit amet mauris sed velit semper porta. Ut metus odio, placerat sed elit quis, volutpat finibus quam. Aliquam tristique porta sagittis. Nam pulvinar at nisl quis accumsan. Pellentesque pulvinar accumsan efficitur. Vestibulum pretium porttitor auctor. Mauris dapibus tempus tortor, eu tempus dolor. Integer tincidunt massa vel nibh auctor lacinia. Sed volutpat ex nunc, eu aliquam justo aliquet sit amet. Curabitur a finibus leo, in scelerisque magna. Curabitur in faucibus neque.

      Cras pharetra justo vitae rutrum pharetra. In ut suscipit eros. Phasellus dapibus leo ac ex dictum suscipit non quis neque. Duis luctus tellus ut odio bibendum, sed faucibus tellus maximus. Nulla vitae eleifend velit. Suspendisse ac aliquam ligula. Suspendisse erat lectus, vulputate quis massa facilisis, tincidunt scelerisque purus. Vivamus ut nulla arcu. In in felis nisi. Sed ut scelerisque nibh. Aenean sodales neque ac eros egestas gravida. Vivamus egestas consectetur quam, in commodo nunc tristique sit amet. Quisque auctor rutrum enim, vel mollis urna congue id.

      In hac habitasse platea dictumst. Sed suscipit tempus sem eu gravida. Maecenas efficitur pharetra turpis, ut molestie felis posuere non. Maecenas auctor nibh vel lectus laoreet, eget dignissim dolor feugiat. Vestibulum ut ornare velit, non auctor diam. Nulla facilisi. Donec id libero nisl. Proin ut neque orci. Quisque ante lectus, rutrum vel suscipit nec, molestie sit amet justo. Nullam nec purus ut massa rhoncus viverra vel ut nunc. Nullam hendrerit est a tortor pretium, at fringilla ex tristique. Vivamus laoreet efficitur risus, vitae bibendum dolor accumsan sit amet. Suspendisse et arcu vulputate, mollis lectus ac, auctor tellus. Nunc maximus laoreet enim, ac eleifend odio commodo quis.

      Praesent eget lacus a urna sodales hendrerit ut sed leo. Etiam nec dignissim tortor. Phasellus tempus nibh massa, sit amet mollis mauris vestibulum at. Vivamus faucibus nisi risus, et hendrerit nulla aliquam ac. Nulla sagittis cursus sapien, eu lobortis turpis accumsan eu. Curabitur tristique congue felis, et faucibus mauris volutpat eu. Maecenas malesuada, diam ac dignissim hendrerit, dolor leo mollis nulla, sed tincidunt ante nunc vel eros. In hac habitasse platea dictumst. Suspendisse condimentum mauris nec nisl pharetra elementum. Ut at nisi nec sapien ultrices ultrices vitae ut dui. Aliquam turpis tortor, sagittis sit amet gravida vitae, ornare vitae turpis. Nulla augue tortor, ultricies sed malesuada in, finibus vitae enim. Suspendisse potenti. Cras id velit blandit, vulputate dui nec, faucibus ante.

      Mauris eu efficitur turpis. Quisque ac massa cursus, cursus libero vitae, pellentesque enim. Maecenas ac dolor suscipit enim interdum vestibulum. Ut et ipsum nec nibh imperdiet fringilla in vel sem. Proin non egestas neque. Proin vehicula lectus magna, vitae fermentum augue sagittis venenatis. Ut eu pharetra dolor, vitae accumsan felis. 
    `,
      author: user2._id,
    }).save();

    const post1user3 = await new Post({
      title: "User 3: Post 1",
      markdown: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum dignissim tortor. Ut a rutrum magna. Vestibulum sit amet mauris sed velit semper porta. Ut metus odio, placerat sed elit quis, volutpat finibus quam. Aliquam tristique porta sagittis. Nam pulvinar at nisl quis accumsan. Pellentesque pulvinar accumsan efficitur. Vestibulum pretium porttitor auctor. Mauris dapibus tempus tortor, eu tempus dolor. Integer tincidunt massa vel nibh auctor lacinia. Sed volutpat ex nunc, eu aliquam justo aliquet sit amet. Curabitur a finibus leo, in scelerisque magna. Curabitur in faucibus neque.

      Cras pharetra justo vitae rutrum pharetra. In ut suscipit eros. Phasellus dapibus leo ac ex dictum suscipit non quis neque. Duis luctus tellus ut odio bibendum, sed faucibus tellus maximus. Nulla vitae eleifend velit. Suspendisse ac aliquam ligula. Suspendisse erat lectus, vulputate quis massa facilisis, tincidunt scelerisque purus. Vivamus ut nulla arcu. In in felis nisi. Sed ut scelerisque nibh. Aenean sodales neque ac eros egestas gravida. Vivamus egestas consectetur quam, in commodo nunc tristique sit amet. Quisque auctor rutrum enim, vel mollis urna congue id.

      In hac habitasse platea dictumst. Sed suscipit tempus sem eu gravida. Maecenas efficitur pharetra turpis, ut molestie felis posuere non. Maecenas auctor nibh vel lectus laoreet, eget dignissim dolor feugiat. Vestibulum ut ornare velit, non auctor diam. Nulla facilisi. Donec id libero nisl. Proin ut neque orci. Quisque ante lectus, rutrum vel suscipit nec, molestie sit amet justo. Nullam nec purus ut massa rhoncus viverra vel ut nunc. Nullam hendrerit est a tortor pretium, at fringilla ex tristique. Vivamus laoreet efficitur risus, vitae bibendum dolor accumsan sit amet. Suspendisse et arcu vulputate, mollis lectus ac, auctor tellus. Nunc maximus laoreet enim, ac eleifend odio commodo quis.

      Praesent eget lacus a urna sodales hendrerit ut sed leo. Etiam nec dignissim tortor. Phasellus tempus nibh massa, sit amet mollis mauris vestibulum at. Vivamus faucibus nisi risus, et hendrerit nulla aliquam ac. Nulla sagittis cursus sapien, eu lobortis turpis accumsan eu. Curabitur tristique congue felis, et faucibus mauris volutpat eu. Maecenas malesuada, diam ac dignissim hendrerit, dolor leo mollis nulla, sed tincidunt ante nunc vel eros. In hac habitasse platea dictumst. Suspendisse condimentum mauris nec nisl pharetra elementum. Ut at nisi nec sapien ultrices ultrices vitae ut dui. Aliquam turpis tortor, sagittis sit amet gravida vitae, ornare vitae turpis. Nulla augue tortor, ultricies sed malesuada in, finibus vitae enim. Suspendisse potenti. Cras id velit blandit, vulputate dui nec, faucibus ante.

      Mauris eu efficitur turpis. Quisque ac massa cursus, cursus libero vitae, pellentesque enim. Maecenas ac dolor suscipit enim interdum vestibulum. Ut et ipsum nec nibh imperdiet fringilla in vel sem. Proin non egestas neque. Proin vehicula lectus magna, vitae fermentum augue sagittis venenatis. Ut eu pharetra dolor, vitae accumsan felis. 
    `,
      author: user3._id,
    }).save();

    const post2user3 = await new Post({
      title: "User 3: Post 2",
      markdown: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer fermentum dignissim tortor. Ut a rutrum magna. Vestibulum sit amet mauris sed velit semper porta. Ut metus odio, placerat sed elit quis, volutpat finibus quam. Aliquam tristique porta sagittis. Nam pulvinar at nisl quis accumsan. Pellentesque pulvinar accumsan efficitur. Vestibulum pretium porttitor auctor. Mauris dapibus tempus tortor, eu tempus dolor. Integer tincidunt massa vel nibh auctor lacinia. Sed volutpat ex nunc, eu aliquam justo aliquet sit amet. Curabitur a finibus leo, in scelerisque magna. Curabitur in faucibus neque.

      Cras pharetra justo vitae rutrum pharetra. In ut suscipit eros. Phasellus dapibus leo ac ex dictum suscipit non quis neque. Duis luctus tellus ut odio bibendum, sed faucibus tellus maximus. Nulla vitae eleifend velit. Suspendisse ac aliquam ligula. Suspendisse erat lectus, vulputate quis massa facilisis, tincidunt scelerisque purus. Vivamus ut nulla arcu. In in felis nisi. Sed ut scelerisque nibh. Aenean sodales neque ac eros egestas gravida. Vivamus egestas consectetur quam, in commodo nunc tristique sit amet. Quisque auctor rutrum enim, vel mollis urna congue id.

      In hac habitasse platea dictumst. Sed suscipit tempus sem eu gravida. Maecenas efficitur pharetra turpis, ut molestie felis posuere non. Maecenas auctor nibh vel lectus laoreet, eget dignissim dolor feugiat. Vestibulum ut ornare velit, non auctor diam. Nulla facilisi. Donec id libero nisl. Proin ut neque orci. Quisque ante lectus, rutrum vel suscipit nec, molestie sit amet justo. Nullam nec purus ut massa rhoncus viverra vel ut nunc. Nullam hendrerit est a tortor pretium, at fringilla ex tristique. Vivamus laoreet efficitur risus, vitae bibendum dolor accumsan sit amet. Suspendisse et arcu vulputate, mollis lectus ac, auctor tellus. Nunc maximus laoreet enim, ac eleifend odio commodo quis.

      Praesent eget lacus a urna sodales hendrerit ut sed leo. Etiam nec dignissim tortor. Phasellus tempus nibh massa, sit amet mollis mauris vestibulum at. Vivamus faucibus nisi risus, et hendrerit nulla aliquam ac. Nulla sagittis cursus sapien, eu lobortis turpis accumsan eu. Curabitur tristique congue felis, et faucibus mauris volutpat eu. Maecenas malesuada, diam ac dignissim hendrerit, dolor leo mollis nulla, sed tincidunt ante nunc vel eros. In hac habitasse platea dictumst. Suspendisse condimentum mauris nec nisl pharetra elementum. Ut at nisi nec sapien ultrices ultrices vitae ut dui. Aliquam turpis tortor, sagittis sit amet gravida vitae, ornare vitae turpis. Nulla augue tortor, ultricies sed malesuada in, finibus vitae enim. Suspendisse potenti. Cras id velit blandit, vulputate dui nec, faucibus ante.

      Mauris eu efficitur turpis. Quisque ac massa cursus, cursus libero vitae, pellentesque enim. Maecenas ac dolor suscipit enim interdum vestibulum. Ut et ipsum nec nibh imperdiet fringilla in vel sem. Proin non egestas neque. Proin vehicula lectus magna, vitae fermentum augue sagittis venenatis. Ut eu pharetra dolor, vitae accumsan felis. 
    `,
      author: user3._id,
    }).save();

    //Creates dummy comments
    const comment1user1 = await new Comment({
      text: "This is a comment from user 1",
      author: user1._id,
      post: post1user2._id,
    }).save();

    const comment2user1 = await new Comment({
      text: "This is a comment from user 1",
      author: user1._id,
      post: post1user3._id,
    }).save();

    const comment1user2 = await new Comment({
      text: "This is a comment from user 1",
      author: user2._id,
      post: post1user1._id,
    }).save();

    const comment2user2 = await new Comment({
      text: "This is a comment from user 1",
      author: user2._id,
      post: post1user3._id,
    }).save();

    const comment1user3 = await new Comment({
      text: "This is a comment from user 1",
      author: user3._id,
      post: post1user1._id,
    }).save();

    const comment2user3 = await new Comment({
      text: "This is a comment from user 1",
      author: user3._id,
      post: post1user2._id,
    }).save();
  } catch (err) {
    console.log(err);
  }
}

export default createContent;

// const getUser = () => {
//   console.log("fetching user");
//   setTimeout(() => {
//     console.log("user fetcher");
//     console.log({
//       _id: 1,
//       name: "John Doe",
//       email: "john@gmail.com",
//     });
//   }, 4000);
// };

// console.log("start");
// getUser();
// console.log("end");

const getUser = (callback) => {
  console.log("fetching user");
  setTimeout(() => {
    console.log("user fetching");
    console.log({
      _id: 1,
      name: "John Doe",
      email: "john#gmail.com",
    });
    callback();
  }, 4000);
};

const getPosts = (userId, callback) => {
  setTimeout(() => {
    console.log("posts fetched");
    console.log(
      {
        _id: 1,
        userid: userId,
        title: "post 1",
      },
      {
        _id: 2,
        userid: userId,
        title: "post 2",
      },
    );
    callback();
  }, 3000);
};

console.log("start");
getUser(() => {
  getPosts(1);
});

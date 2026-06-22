const fetchUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      console.log("user fetched");
      if (error) {
        reject({ message: "User fetch failed" });
      } else {
        resolve({ _id: 1, name: "John Doe", email: "john@gmail.com" });
      }
    }, 4000);
  });
};

const fetchPosts = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      console.log("posts fetched");
      if (error) {
        reject({ message: "Posts fetch failed" });
      } else {
        resolve([
          {
            _id: 1,
            userId: userId,
            title: "post 1",
          },
          {
            _id: 2,
            userId: userId,
            title: "post 2",
          },
          {
            _id: 3,
            userId: userId,
            title: "post 3",
          },
        ]);
      }
    }, 3000);
  });
};

//fetchComments
const fetchComments = (postId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      console.log("posts fetched");
      if (error) {
        reject({ message: "Comments fetch failed" });
      } else {
        resolve([
          {
            _id: 1,
            postId: postId,
            title: "comment 1",
          },
          {
            _id: 2,
            postId: postId,
            title: "comment 2",
          },
          {
            _id: 3,
            postId: postId,
            title: "comment 3",
          },
        ]);
      }
    }, 3000);
  });
};

//! promise chaining
fetchUser()
  .then((user) => {
    console.log(user);
    return fetchPosts(user._id);
  })
  .then((posts) => {
    console.log(posts);
    return fetchComments(posts[0]._id);
  })
  .then((cmnts) => {
    console.log(cmnts);
  })
  .catch((err) => {
    console.log(err);
  });

// fetchPosts(1)
//   .then((posts) => {
//     console.log(posts);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//? handling promise

console.log("end");

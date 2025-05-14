const fs = require("fs");

//====== write file ======== //
fs.writeFile(
  "first_file.txt",
  "this is my first file created using the node js file system",
  function (err) {
    if (err) return console.error(err);
    else console.log("done");
  }
);

//====== read file ======== //
fs.readFile("first_file.txt", function(err, data){
    if (err) return console.error(err);
    else console.log(data.toString());
})

//====== append file ======== //
fs.appendFile("first_file.txt", " and going good.", function (err, data) {
  if (err) return console.error(err);
  else console.log("data");
});

// //====== mkdir file ======== //
fs.mkdir("inside/file.txt", function (err) {
    if (err) return console.error(err);
  else console.log("data");
})


// ====== copy file ======== //
fs.copyFile("first_file.txt", "inside/newfile.txt", function (err) {
    if(err) return console.error(err);
    else console.log("done");
})

//  ========= read dir ======== //
fs.readdir("inside", function (err, files) {
  if (err) return console.error(err);
//   else console.log(files);
  files.forEach((file, i) => {
    console.log(`${i + 1}. ${file}`);
  });
});

var term;

let item = {
  key1: {
    name: "Test 1",
  },
  key2: 1,
};

function saveLocalStorage() {
  localStorage.setItem("test", "test content!");
}

function loadLocalStorage() {
  let result = localStorage.getItem("test");
  console.log(result);
}

jQuery(function ($) {
  term = $("body").terminal(
    function (command, term) {
      if (command == "help") {
        term.echo(
          "[[;white;black]" +
            "Các lệnh hiện có: \n" +
            "\n- clear: dùng để xóa màn hình.\n" +
            "\n-=- Các lệnh hành động -=- \n" +
            "]"
        );
      } else if (command == "cd test") {
        term.echo("Lệnh test được dùng để thí nghiệm, vui lòng ra ngoài.");

        //#region
        term.push(
          function (command, term) {
            switch (command) {
              case "exit":
                term.pop();
                break;

              case "save":
                saveLocalStorage();
                break;

              case "load":
                loadLocalStorage();
                break;

              default:
                break;
            }
          },
          {
            prompt: "test> ",
          }
        );
        //#endregion
        // } else if (command == "#command") {
        //   term.echo('#Work');
      } else {
        term.echo("Lệnh không rõ: " + command);
      }
    },
    {
      greetings:
        "[[b;white;black]" + "\nChào mừng bạn đến với WIT - Witch International Technology!]\n" +
        "[[b;white;black]" +"\nNhập ']" + "[[ib;yellow;black]" + "help]" + "[[b;white;black]" + "' để hiển thị các lệnh hiện có. \n]",

      prompt: "/> ",
    }
  );
});

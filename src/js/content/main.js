///
/// Language
///
var lang = {
  vi: {
    already_current_language:
      'Ngôn ngữ hiện tại của bạn đã là <font color="#00ffcc"><bold>Tiếng Việt</bold></font>',
    description:
      '<font color="white">Đây là trang web hỗ trợ cho các ứng dụng và các trò chơi của nhà phát triển </font>' +
      '<font color="#ffcc00"><bold>MYSTICAL DREAMERS</bold></font><font color="white">.\n\n</font>' +
      '<font color="#00ffcc"><bold>*** CÁC DỰ ÁN ***</bold></font><font color="white">\n\n</font>' +
      '<font color="#ffaa00"><bold>- Highest Firework</bold></font><font color="white">: </font>' +
      '\t<link href="https://play.google.com/store/apps/details?id=com.MysticalDreamers.xmas3">' +
      '<font color="#66aaff">CH Play</font></link>' +
      '<font color="white">\t<font color="#66ff99">{Có sẵn trên cửa hàng}</font>\n</font>' +
      '<font color="#ffaa00"><bold>- Fantasy Opening</bold></font><font color="white">: </font>' +
      '\t<link href="https://play.google.com/store/apps/details?id=com.MysticalDreamers.FantasyOpening">' +
      '<font color="#66aaff">CH Play</font></link>' +
      '<font color="white">\t<font color="#66ff99">{Có sẵn trên cửa hàng}</font>\t<font color="#0000ff">{Đang phát triển}</font></font>',

    contact:
      '<font color="white"><bold>THÔNG TIN LIÊN HỆ</bold>:</font>\n\n' +
      '<font color="white">- Facebook: </font>\t' +
      '<link href="https://www.facebook.com/mrhaomp2001/"><font color="#66aaff">https://www.facebook.com/mrhaomp2001/</font></link>\n' +
      '<font color="white">- Email: </font>\t\t' +
      '<font color="#66ff99">huynhnhuthao248@gmail.com</font>\n' +
      '<font color="white">- YouTube: </font>\t\t' +
      '<link href="https://www.youtube.com/@MRGamer248/"><font color="#66aaff">https://www.youtube.com/@MRGamer248/</font></link>',
  },
  en: {
    already_current_language:
      'Your current language is already <font color="#00ffcc"><bold>English</bold></font>',
    description:
      '<font color="white">This website supports applications and games developed by </font>' +
      '<font color="#ffcc00"><bold>MYSTICAL DREAMERS</bold></font><font color="white">.\n\n</font>' +
      '<font color="#00ffcc"><bold>*** PROJECTS ***</bold></font><font color="white">\n\n</font>' +
      '<font color="#ffaa00"><bold>- Highest Firework</bold></font><font color="white">: </font>' +
      '\t<link href="https://play.google.com/store/apps/details?id=com.MysticalDreamers.xmas3">' +
      '<font color="#66aaff">Google Play Store</font></link>' +
      '<font color="white">\t<font color="#66ff99">{Available on store}</font>\n</font>' +
      '<font color="#ffaa00"><bold>- Fantasy Opening</bold></font><font color="white">: </font>' +
      '\t<link href="https://play.google.com/store/apps/details?id=com.MysticalDreamers.FantasyOpening">' +
      '<font color="#66aaff">Google Play Store</font></link>' +
      '<font color="white">\t<font color="#66ff99">{Available on store}</font>\t<font color="#0000ff">{In development}</font></font>',
    contact:
      '<font color="white"><bold>CONTACT INFORMATION</bold>:</font>\n\n' +
      '<font color="white">- Facebook: </font>\t' +
      '<link href="https://www.facebook.com/mrhaomp2001/"><font color="#66aaff">https://www.facebook.com/mrhaomp2001/</font></link>\n' +
      '<font color="white">- Email: </font>\t\t' +
      '<font color="#66ff99">huynhnhuthao248@gmail.com</font>\n' +
      '<font color="white">- YouTube: </font>\t\t' +
      '<link href="https://www.youtube.com/@MRGamer248/"><font color="#66aaff">https://www.youtube.com/@MRGamer248/</font></link>',
  },
};

///
///
///

var term;
let language;
let language_off;

function OnInitialize(term) {
  if (!localStorage.getItem("lang")) {
    localStorage.setItem("lang", "vi");
    language = "vi";
  } else {
    language = localStorage.getItem("lang");
  }

  if (!localStorage.getItem("lang_off")) {
    language_off = false;
  } else {
    language_off = true;
  }
}

var unknowCommand = function (command, term) {
  term.echo("\nLệnh không rõ: " + command);
};

var test = function (command, term) {
  //#region
  term.echo("Lệnh test được dùng để thí nghiệm, vui lòng ra ngoài.");

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
        case "clear":
          term.clear();
          break;
        default:
          break;
      }
    },
    {
      prompt: "test> ",
      clear: false,
      completion: ["foo", "bar", "baz", "bar1", "baz2"],
    }
  );
};

function echoLanguage(term) {
  term.echo(
    "" +
      '<font color="white">=====</font>\n\n' +
      '<font color="#ffcc00"><bold>NGÔN NGỮ / LANGUAGE</bold></font>\n\n' +
      '<font color="white">Trang web này hỗ trợ </font><font color="white"><bold>2 ngôn ngữ</bold></font><font color="white">: </font><font color="white"><italic>Tiếng Anh</italic></font><font color="white"> và </font><font color="white"><italic>Tiếng Việt</italic></font><font color="white">.</font>\n<font color="white">Để thay đổi ngôn ngữ, hãy sử dụng lệnh:</font>\n\n<font color="white">- </font><font color="#ffcc00">"language en"</font><font color="white"> </font><font color="white"><italic>để chuyển sang Tiếng Anh</italic></font>\n<font color="white">- </font><font color="#ffcc00">"language vi"</font><font color="white"> </font><font color="white"><italic>để chuyển sang Tiếng Việt</italic>\n\n' +
      "---\n\n" +
      '<font color="white">This website supports </font><font color="white"><bold>2 languages</bold></font><font color="white">: </font><font color="white"><italic>English</italic></font><font color="white"> and </font><font color="white"><italic>Vietnamese</italic></font><font color="white">.</font>\n<font color="white">To change the language, use the command:</font>\n\n<font color="white">- </font><font color="#ffcc00">"language en"</font><font color="white"> </font><font color="white"><italic>to switch to English</italic></font>\n<font color="white">- </font><font color="#ffcc00">"language vi"</font><font color="white"> </font><font color="white"><italic>to switch to Vietnamese</italic></font>\n\n' +
      (language == "vi"
        ? '<font color="white"><bold>Ngôn ngữ hiện tại:</bold> </font><font color="#00ffcc">' +
          "TIẾNG VIỆT (VI)</font>\n\n" +
          '=> dùng lệnh <font color="#ffcc00">"language off"</font> để tắt của sổ này'
        : '<font color="white"><bold>Current language:</bold> </font><font color="#00ffcc">' +
          "ENGLISH (EN)</font>\n\n" +
          '=> use the command <font color="#ffcc00">"language off"</font> to close this window') +
      "</font>\n\n" +
      "====="
  );
}
//#endregion
jQuery(function ($) {
  term = $("body").terminal(
    function (command, term) {
      term.clear();
      term.echo(lang[language].description);
      term.echo("\n");
      term.echo(lang[language].contact);

      switch (command) {
        case "help":
          term.echo(
            "[[;white;black]" +
              "Các lệnh hiện có: \n" +
              "\n- clear: dùng để xóa màn hình.\n" +
              "\n-=- Các lệnh hành động -=- ]\n" +
              '<font color="blue">foo <green>bar</green> baz</font>',
            {
              wrap: true,
              keepWords: true,
            }
          );
          break;
        case "test":
          test(command, term);
          break;
        case "language":
          term.clear();
          echoLanguage(term);
          break;
        case "language off":
          localStorage.setItem("lang_off", true);
          break;
        case "language vi":
          if (language === "vi") {
            term.echo(lang[language].already_current_language);
          } else {
            localStorage.setItem("lang", "vi");
            location.reload();
          }
          break;

        case "language en":
          if (language === "en") {
            term.echo(lang[language].already_current_language);
          } else {
            localStorage.setItem("lang", "en");
            location.reload();
          }
          break;

        default:
          unknowCommand(command, term);
          break;
      }
      term.echo("\n");
    },
    {
      greetings: "",
      prompt: "/> ",
      clear: false,
      autocompleteMenu: true,
      completion: ["language"],
      onInit(term) {
        OnInitialize();
        if (!language_off) {
          echoLanguage(term);
        }
        term.echo(lang[language].description);
        term.echo("\n");
        term.echo(lang[language].contact);
        term.echo("\n");
      },
    }
  );
});

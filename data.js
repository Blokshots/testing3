var APP_DATA = {
  "scenes": [
    {
      "id": "0-backyard",
      "name": "Backyard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "yaw": -0.6317411862725155,
        "pitch": -0.07617470703247875,
        "fov": 1.2691192001910299
      },
      "linkHotspots": [
        {
          "yaw": -2.0231563028284185,
          "pitch": 0.24169610929311247,
          "rotation": 0,
          "target": "1-driveway"
        },
        {
          "yaw": 0.19912441761306,
          "pitch": 0.11288071512630715,
          "rotation": 0,
          "target": "4-south-side"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.231499408935128,
          "pitch": 0.019669271207144234,
          "title": "Fire Pit",
          "text": "Fire pit added 2021"
        },
        {
          "yaw": 3.0933950456182853,
          "pitch": -0.02591858893989496,
          "title": "Garage",
          "text": "Garage built in 1996"
        }
      ]
    },
    {
      "id": "1-driveway",
      "name": "Driveway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7369236341152785,
          "pitch": 0.16256436011498288,
          "rotation": 0,
          "target": "2-front-north"
        },
        {
          "yaw": -0.19697442618853422,
          "pitch": 0.1466397796120873,
          "rotation": 0,
          "target": "0-backyard"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.349037407181168,
          "pitch": -0.0035023980057715676,
          "title": "Window Box",
          "text": "Beautiful interior window seat in the dining room."
        }
      ]
    },
    {
      "id": "2-front-north",
      "name": "Front North",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.41496243016930556,
          "pitch": 0.0482032984769063,
          "rotation": 0,
          "target": "1-driveway"
        },
        {
          "yaw": -1.2238782846408949,
          "pitch": 0.07085523452622233,
          "rotation": 0,
          "target": "3-front-south"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.9052893919561207,
          "pitch": 0.4923928438575569,
          "title": "Mailbox",
          "text": "Mailbox replaced in 2021"
        }
      ]
    },
    {
      "id": "3-front-south",
      "name": "Front South",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.30290544860223534,
          "pitch": 0.10029170572657264,
          "rotation": 0,
          "target": "4-south-side"
        },
        {
          "yaw": 1.2500936884130365,
          "pitch": 0.11179396038753708,
          "rotation": 0,
          "target": "2-front-north"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-south-side",
      "name": "South Side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.050204612542812,
          "pitch": 0.15318564297899329,
          "rotation": 0,
          "target": "0-backyard"
        },
        {
          "yaw": 1.3597970252653049,
          "pitch": 0.1426855184613558,
          "rotation": 0,
          "target": "3-front-south"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2499533698308305,
          "pitch": 0.12321016212028013,
          "title": "Basement Door",
          "text": "Basement access from the south side of the house.&nbsp;"
        },
        {
          "yaw": -0.7316798765436623,
          "pitch": 0.16381642609126246,
          "title": "Garden Box",
          "text": "Three tier garden box added in Spring 2025"
        }
      ]
    },
    {
      "id": "5-backyard",
      "name": "Backyard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2976,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};

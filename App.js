 import React, {Component, useState, useEffect  } from 'react';


import Voice from 'react-native-voice';

import {Platform, StyleSheet, Text, View, FlatList,Image, ScrollView, Button, PermissionsAndroid, SafeAreaView, TextInput,
        TouchableOpacity,ActivityIndicator} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};





export default function App() {





const requestMicrophone = async () => {
            if (Platform.OS === 'android') {
                try {
                  const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
                    {
                      title: 'Permissions for record audio',
                      message: 'Give permission to your device to record audio',
                      buttonPositive: 'ok',
                    },
                  );
                  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('permission granted');
                  } else {
                    console.log('permission denied ');
                    return;
                  }
                } catch (err) {
                  console.warn(err);
                  return;
                }
              }
        }

const [people, setPeople] = useState([
    {
      id: 1,
      first_name: 'Mitchael',
      last_name: 'Grishunin',
      email: 'mgrishunin0@constantcontact.com',
      gender: 'Male',
      latitude: -23.5586314,
      longitude: -51.4650904,
      description: 'Fracture of alveolus of mandible, unspecified side, 7thK',
      image: 'https://robohash.org/autipsamomnis.jpg?size=50x50&set=set1',
    },
    {
      id: 2,
      first_name: 'Seamus',
      last_name: 'MacGilrewy',
      email: 'smacgilrewy1@oakley.com',
      gender: 'Male',
      latitude: -9.0933664,
      longitude: 124.8905151,
      description:
        'Mech compl of cardiac pulse generator (battery), init encntr',
      image: 'https://robohash.org/quiaquiqui.png?size=50x50&set=set1',
    },
    {
      id: 3,
      first_name: 'Byron',
      last_name: 'MacPharlain',
      email: 'bmacpharlain2@webs.com',
      gender: 'Male',
      latitude: 18.594395,
      longitude: -72.3074326,
      description: 'Hypertrophy of tongue papillae',
      image: 'https://robohash.org/eiusharumlibero.bmp?size=50x50&set=set1',
    },
    {
      id: 4,
      first_name: 'Zackariah',
      last_name: 'Brumby',
      email: 'zbrumby3@geocities.jp',
      gender: 'Male',
      latitude: 33.267964,
      longitude: 116.557663,
      description: 'Malignant neoplasm of undescended testis',
      image: 'https://robohash.org/suntquoiste.bmp?size=50x50&set=set1',
    },
    {
      id: 5,
      first_name: 'Magdalen',
      last_name: 'Bosma',
      email: 'mbosma4@hc360.com',
      gender: 'Female',
      latitude: 43.963917,
      longitude: 4.796809,
      description: 'Sltr-haris Type I physl fx upr end rad, r arm, 7thG',
      image: 'https://robohash.org/quoseteum.png?size=50x50&set=set1',
    },
    {
      id: 6,
      first_name: 'Sharleen',
      last_name: 'Vondrach',
      email: 'svondrach5@ox.ac.uk',
      gender: 'Female',
      latitude: -37.7204693,
      longitude: 144.9629556,
      description: 'Malignant neoplasm of lower-outer quadrant of breast, male',
      image: 'https://robohash.org/quiillumullam.png?size=50x50&set=set1',
    },
    {
      id: 7,
      first_name: 'Alonzo',
      last_name: 'Bisatt',
      email: 'abisatt6@ehow.com',
      gender: 'Male',
      latitude: 52.2467948,
      longitude: 87.1321485,
      description: 'Pectus excavatum',
      image: 'https://robohash.org/estetconsequatur.bmp?size=50x50&set=set1',
    },
    {
      id: 8,
      first_name: 'Jean',
      last_name: 'Purkiss',
      email: 'jpurkiss7@fotki.com',
      gender: 'Male',
      latitude: 2.266733,
      longitude: -75.803848,
      description: 'Other specified rheumatoid arthritis, ankle and foot',
      image:
        'https://robohash.org/minusdoloresblanditiis.jpg?size=50x50&set=set1',
    },
    {
      id: 9,
      first_name: 'Payton',
      last_name: 'Stileman',
      email: 'pstileman8@who.int',
      gender: 'Male',
      latitude: 6.703272,
      longitude: 8.8997015,
      description: 'Other injury of abdominal aorta',
      image: 'https://robohash.org/commodinonsunt.png?size=50x50&set=set1',
    },
    {
      id: 10,
      first_name: 'Dev',
      last_name: 'Coudray',
      email: 'dcoudray9@examiner.com',
      gender: 'Male',
      latitude: 51.880525,
      longitude: -8.4523258,
      description: 'Inj oth blood vessels at shldr/up arm, right arm, init',
      image: 'https://robohash.org/eumhicsunt.png?size=50x50&set=set1',
    },
    {
      id: 11,
      first_name: 'Rollin',
      last_name: 'Delmonti',
      email: 'rdelmontia@nationalgeographic.com',
      gender: 'Male',
      latitude: -9.42137,
      longitude: 119.89388,
      description:
        'Strain of flexor musc/fasc/tend at forarm lv, left arm, subs',
      image: 'https://robohash.org/temporaistenon.jpg?size=50x50&set=set1',
    },
    {
      id: 12,
      first_name: 'Quintilla',
      last_name: 'Slesser',
      email: 'qslesserb@google.co.jp',
      gender: 'Female',
      latitude: 21.0345812,
      longitude: 106.3265126,
      description: 'Corros 3rd deg mu right fingers (nail), inc thumb, subs',
      image: 'https://robohash.org/explicaboquienim.bmp?size=50x50&set=set1',
    },
    {
      id: 13,
      first_name: 'Burlie',
      last_name: 'Staneland',
      email: 'bstanelandc@state.tx.us',
      gender: 'Male',
      latitude: 45.207675,
      longitude: 37.2884784,
      description: 'Obsessive-compulsive disorder, unspecified',
      image: 'https://robohash.org/consequaturcumin.png?size=50x50&set=set1',
    },
    {
      id: 14,
      first_name: 'Emlyn',
      last_name: 'Bartosiak',
      email: 'ebartosiakd@nasa.gov',
      gender: 'Female',
      latitude: 45.5080397,
      longitude: -73.564543,
      description:
        'Burn of unspecified degree of unspecified palm, init encntr',
      image:
        'https://robohash.org/autlaudantiumratione.png?size=50x50&set=set1',
    },
    {
      id: 15,
      first_name: 'Debor',
      last_name: 'Ealam',
      email: 'dealame@gravatar.com',
      gender: 'Female',
      latitude: 43.8986,
      longitude: 39.3467,
      description: 'Other specified diseases of spinal cord',
      image: 'https://robohash.org/laboresapienteiste.png?size=50x50&set=set1',
    },
    {
      id: 16,
      first_name: 'Wilie',
      last_name: 'Vaune',
      email: 'wvaunef@lulu.com',
      gender: 'Female',
      latitude: 27.347756,
      longitude: 118.449526,
      description:
        'Poisoning by other topical agents, undetermined, subs encntr',
      image:
        'https://robohash.org/autnecessitatibusadipisci.png?size=50x50&set=set1',
    },
    {
      id: 17,
      first_name: 'Angelico',
      last_name: 'Smorthwaite',
      email: 'asmorthwaiteg@bloglovin.com',
      gender: 'Male',
      latitude: 17.7308177,
      longitude: 100.2130766,
      description:
        'Unsp fx fourth MC bone, left hand, subs for fx w delay heal',
      image: 'https://robohash.org/voluptateutin.jpg?size=50x50&set=set1',
    },
    {
      id: 18,
      first_name: 'Kerr',
      last_name: 'Goodwill',
      email: 'kgoodwillh@csmonitor.com',
      gender: 'Male',
      latitude: 37.0827754,
      longitude: -8.9092899,
      description: 'Other juvenile arthritis, hip',
      image:
        'https://robohash.org/placeatreiciendisiste.png?size=50x50&set=set1',
    },
    {
      id: 19,
      first_name: 'Dana',
      last_name: 'Hillum',
      email: 'dhillumi@is.gd',
      gender: 'Male',
      latitude: -6.7297651,
      longitude: 110.6779776,
      description: 'Poisoning by local anesthetics, accidental, subs',
      image: 'https://robohash.org/deseruntnemout.jpg?size=50x50&set=set1',
    },
    {
      id: 20,
      first_name: 'Kristopher',
      last_name: 'Orpyne',
      email: 'korpynej@yale.edu',
      gender: 'Male',
      latitude: 11.1506898,
      longitude: 108.4869555,
      description:
        'Oth traumatic spondylolisthesis of fourth cervical vertebra',
      image:
        'https://robohash.org/ipsumnecessitatibusneque.jpg?size=50x50&set=set1',
    },
    {
      id: 21,
      first_name: 'Salvador',
      last_name: 'Irce',
      email: 'sircek@loc.gov',
      gender: 'Male',
      latitude: -0.0998238,
      longitude: 34.2747004,
      description: 'Oth osteopor w crnt path fx, r hand, 7thD',
      image: 'https://robohash.org/officiisquoqui.bmp?size=50x50&set=set1',
    },
    {
      id: 22,
      first_name: 'Wyndham',
      last_name: 'Franz-Schoninger',
      email: 'wfranzschoningerl@accuweather.com',
      gender: 'Male',
      latitude: -5.5844754,
      longitude: 105.4771084,
      description: 'Poisoning by unsp psychotropic drug, intentional self-harm',
      image: 'https://robohash.org/ipsaarchitectoeos.png?size=50x50&set=set1',
    },
    {
      id: 23,
      first_name: 'Manny',
      last_name: 'Kinrade',
      email: 'mkinradem@aol.com',
      gender: 'Male',
      latitude: 31.304274,
      longitude: 117.924148,
      description: 'Primary carnitine deficiency',
      image: 'https://robohash.org/nihilnequetempora.jpg?size=50x50&set=set1',
    },
    {
      id: 24,
      first_name: 'Dannye',
      last_name: 'Snape',
      email: 'dsnapen@columbia.edu',
      gender: 'Female',
      latitude: -6.3207152,
      longitude: -47.7834888,
      description:
        'Oth rheumatoid arthritis w rheumatoid factor of left ank/ft',
      image: 'https://robohash.org/eumconsecteturet.bmp?size=50x50&set=set1',
    },
    {
      id: 25,
      first_name: 'Marcia',
      last_name: 'Houlaghan',
      email: 'mhoulaghano@bloglines.com',
      gender: 'Female',
      latitude: 54.0471273,
      longitude: 19.2012887,
      description: 'Other burn on board watercraft',
      image:
        'https://robohash.org/repellatautvoluptate.bmp?size=50x50&set=set1',
    },
    {
      id: 26,
      first_name: 'Sonny',
      last_name: 'Manjot',
      email: 'smanjotp@wordpress.com',
      gender: 'Female',
      latitude: 46.1168407,
      longitude: 39.3008199,
      description: 'Pnctr w/o fb of unsp toe(s) w/o damage to nail, init',
      image: 'https://robohash.org/autsedid.jpg?size=50x50&set=set1',
    },
    {
      id: 27,
      first_name: 'Ker',
      last_name: 'Stitfall',
      email: 'kstitfallq@independent.co.uk',
      gender: 'Male',
      latitude: 21.428436,
      longitude: 110.869567,
      description: 'Osteonecrosis due to drugs, left tibia',
      image: 'https://robohash.org/nequequiaid.jpg?size=50x50&set=set1',
    },
    {
      id: 28,
      first_name: 'Kyle',
      last_name: 'Cogar',
      email: 'kcogarr@va.gov',
      gender: 'Male',
      latitude: 32.704922,
      longitude: 115.970718,
      description: 'Type 4 fracture of sacrum, init encntr for open fracture',
      image:
        'https://robohash.org/voluptasseddoloribus.png?size=50x50&set=set1',
    },
    {
      id: 29,
      first_name: 'Chalmers',
      last_name: 'Blackshaw',
      email: 'cblackshaws@hc360.com',
      gender: 'Male',
      latitude: -6.8300602,
      longitude: 110.8374104,
      description: 'Unspecified cholesteatoma',
      image: 'https://robohash.org/utsaepeut.bmp?size=50x50&set=set1',
    },
    {
      id: 30,
      first_name: 'Torey',
      last_name: 'MacIlory',
      email: 'tmaciloryt@live.com',
      gender: 'Male',
      latitude: 0.4990124,
      longitude: 29.4527538,
      description: 'Nondisp transverse fx shaft of l tibia, 7thD',
      image:
        'https://robohash.org/fugiatsuntrepellendus.bmp?size=50x50&set=set1',
    },
    {
      id: 31,
      first_name: 'Kristos',
      last_name: 'Paskerful',
      email: 'kpaskerfulu@noaa.gov',
      gender: 'Male',
      latitude: 41.6714042,
      longitude: -8.410695,
      description: 'Path fx in oth disease, r shoulder, subs for fx w malunion',
      image: 'https://robohash.org/impediteumquos.jpg?size=50x50&set=set1',
    },
    {
      id: 32,
      first_name: 'Shel',
      last_name: 'Cranney',
      email: 'scranneyv@geocities.com',
      gender: 'Female',
      latitude: -31.4787554,
      longitude: -64.2316792,
      description: 'Laceration without foreign body of ankle',
      image: 'https://robohash.org/aetquas.png?size=50x50&set=set1',
    },
    {
      id: 33,
      first_name: 'Celestina',
      last_name: 'Casley',
      email: 'ccasleyw@google.pl',
      gender: 'Female',
      latitude: 40.657978,
      longitude: 109.840313,
      description: 'Oth injury of right internal jugular vein, init encntr',
      image:
        'https://robohash.org/similiqueporrofacilis.bmp?size=50x50&set=set1',
    },
    {
      id: 34,
      first_name: 'Mendie',
      last_name: 'Rozea',
      email: 'mrozeax@phoca.cz',
      gender: 'Male',
      latitude: 47.440449,
      longitude: 19.1700809,
      description: 'Diaphragmatic hernia with gangrene',
      image:
        'https://robohash.org/voluptascupiditatecumque.jpg?size=50x50&set=set1',
    },
    {
      id: 35,
      first_name: 'Padriac',
      last_name: 'Cockerham',
      email: 'pcockerhamy@comsenz.com',
      gender: 'Male',
      latitude: 33.580873,
      longitude: 114.016536,
      description: 'Terrorism involving chemical weapons',
      image: 'https://robohash.org/estsitducimus.png?size=50x50&set=set1',
    },
    {
      id: 36,
      first_name: 'Kris',
      last_name: 'Urridge',
      email: 'kurridgez@theatlantic.com',
      gender: 'Male',
      latitude: 43.2916776,
      longitude: -0.3696612,
      description: 'Central cord syndrome at C2, init',
      image: 'https://robohash.org/temporaeumvelit.png?size=50x50&set=set1',
    },
    {
      id: 37,
      first_name: 'Lorilee',
      last_name: 'Cabbell',
      email: 'lcabbell10@comsenz.com',
      gender: 'Female',
      latitude: 58.5931974,
      longitude: 35.8080537,
      description: 'Adverse effect of rifampicins',
      image: 'https://robohash.org/aututsapiente.jpg?size=50x50&set=set1',
    },
    {
      id: 38,
      first_name: 'Sholom',
      last_name: 'Slader',
      email: 'sslader11@omniture.com',
      gender: 'Male',
      latitude: -7.2623348,
      longitude: 38.7368187,
      description: 'Poisn by antihyperlip and antiarterio drugs, assault, init',
      image: 'https://robohash.org/nobisauthic.bmp?size=50x50&set=set1',
    },
    {
      id: 39,
      first_name: 'Jarret',
      last_name: 'Touzey',
      email: 'jtouzey12@dyndns.org',
      gender: 'Male',
      latitude: 61.7016711,
      longitude: 23.2638837,
      description: 'Localized anterior staphyloma, bilateral',
      image:
        'https://robohash.org/repudiandaeveroomnis.png?size=50x50&set=set1',
    },
    {
      id: 40,
      first_name: 'Tamma',
      last_name: 'Hallgath',
      email: 'thallgath13@example.com',
      gender: 'Female',
      latitude: -8.5408,
      longitude: 115.1191,
      description: 'Central retinal vein occlusion, left eye, w rtnl neovas',
      image: 'https://robohash.org/estquoat.jpg?size=50x50&set=set1',
    },
    {
      id: 41,
      first_name: 'Werner',
      last_name: 'Hasker',
      email: 'whasker14@bing.com',
      gender: 'Male',
      latitude: 34.2818498,
      longitude: 109.002843,
      description: 'Hb-SS disease with splenic sequestration',
      image:
        'https://robohash.org/adipisciminimaquisquam.png?size=50x50&set=set1',
    },
    {
      id: 42,
      first_name: 'Marvin',
      last_name: 'Brunon',
      email: 'mbrunon15@mapy.cz',
      gender: 'Male',
      latitude: 9.6365101,
      longitude: 123.8536209,
      description: 'Non-prs chronic ulcer of left thigh w necrosis of muscle',
      image: 'https://robohash.org/quialaborevelit.bmp?size=50x50&set=set1',
    },
    {
      id: 43,
      first_name: 'Hersch',
      last_name: 'Dibble',
      email: 'hdibble16@weather.com',
      gender: 'Male',
      latitude: 52.7085795,
      longitude: 25.3346543,
      description: 'Poisoning by angiotens-convert-enzyme inhibtr, undet, subs',
      image: 'https://robohash.org/rerumcommodilaborum.bmp?size=50x50&set=set1',
    },
    {
      id: 44,
      first_name: 'Lonee',
      last_name: 'Goodlife',
      email: 'lgoodlife17@craigslist.org',
      gender: 'Female',
      latitude: 25.178421,
      longitude: 106.099617,
      description: 'Dysphasia following cerebral infarction',
      image: 'https://robohash.org/cumquismaxime.jpg?size=50x50&set=set1',
    },
    {
      id: 45,
      first_name: 'Jessalin',
      last_name: 'Fulham',
      email: 'jfulham18@yandex.ru',
      gender: 'Female',
      latitude: 7.8286837,
      longitude: -72.3022522,
      description: 'Poisoning by smallpox vaccines, accidental, sequela',
      image: 'https://robohash.org/quisundesit.png?size=50x50&set=set1',
    },
    {
      id: 46,
      first_name: 'Alwin',
      last_name: 'McLaggan',
      email: 'amclaggan19@diigo.com',
      gender: 'Male',
      latitude: 62.7107035,
      longitude: 23.5410417,
      description:
        'Lacerat abd wall w fb, periumb rgn w/o penet perit cav, subs',
      image: 'https://robohash.org/voluptasautemodit.bmp?size=50x50&set=set1',
    },
    {
      id: 47,
      first_name: 'Kerry',
      last_name: 'Carley',
      email: 'kcarley1a@census.gov',
      gender: 'Female',
      latitude: 39.1845611,
      longitude: 22.7382766,
      description: 'Episodic tension-type headache, not intractable',
      image:
        'https://robohash.org/fugaaliquidsimilique.png?size=50x50&set=set1',
    },
    {
      id: 48,
      first_name: 'Lalo',
      last_name: 'Magowan',
      email: 'lmagowan1b@gov.uk',
      gender: 'Male',
      latitude: 14.4612646,
      longitude: 100.5577407,
      description: 'Other disorders of vestibular function, left ear',
      image: 'https://robohash.org/temporaquovel.bmp?size=50x50&set=set1',
    },
    {
      id: 49,
      first_name: 'Padriac',
      last_name: 'Kimmitt',
      email: 'pkimmitt1c@psu.edu',
      gender: 'Male',
      latitude: 43.817071,
      longitude: 125.323544,
      description: 'Unspecified dislocation of left index finger, init encntr',
      image: 'https://robohash.org/fugiatquieaque.bmp?size=50x50&set=set1',
    },
    {
      id: 50,
      first_name: 'Donn',
      last_name: 'Lamba',
      email: 'dlamba1d@over-blog.com',
      gender: 'Male',
      latitude: -6.9353179,
      longitude: 112.548349,
      description: 'Helicopter crash injuring occupant, sequela',
      image: 'https://robohash.org/cumquecorporisad.jpg?size=50x50&set=set1',
    },
    {
      id: 51,
      first_name: 'Ban',
      last_name: 'Pyson',
      email: 'bpyson1e@vistaprint.com',
      gender: 'Male',
      latitude: 31.7244854,
      longitude: 118.1084793,
      description: 'Inj muscle, fascia and tendon of oth parts of biceps',
      image: 'https://robohash.org/adfugitat.bmp?size=50x50&set=set1',
    },
    {
      id: 52,
      first_name: 'Chaddie',
      last_name: 'Jacobsz',
      email: 'cjacobsz1f@dot.gov',
      gender: 'Male',
      latitude: -27.1743773,
      longitude: -51.5054475,
      description: 'Capslr glaucoma w/pseudxf lens, right eye, mild stage',
      image:
        'https://robohash.org/quovoluptasmolestias.jpg?size=50x50&set=set1',
    },
    {
      id: 53,
      first_name: 'Filberte',
      last_name: 'McFayden',
      email: 'fmcfayden1g@berkeley.edu',
      gender: 'Male',
      latitude: 35.545649,
      longitude: 118.161586,
      description: 'Displ subtrochnt fx unsp femr, 7thH',
      image:
        'https://robohash.org/delectusdolormollitia.jpg?size=50x50&set=set1',
    },
    {
      id: 54,
      first_name: 'Vivien',
      last_name: 'Bubbear',
      email: 'vbubbear1h@devhub.com',
      gender: 'Female',
      latitude: 40.3329294,
      longitude: 116.6356312,
      description: 'Disp fx of lateral epicondyl of unsp humer, 7thP',
      image:
        'https://robohash.org/corporispraesentiumvel.bmp?size=50x50&set=set1',
    },
    {
      id: 55,
      first_name: 'Gayle',
      last_name: 'Vineall',
      email: 'gvineall1i@ftc.gov',
      gender: 'Female',
      latitude: 28.008237,
      longitude: 114.033247,
      description:
        'Oth spon disruption of medial collat ligament of right knee',
      image: 'https://robohash.org/sitreiciendisa.jpg?size=50x50&set=set1',
    },
    {
      id: 56,
      first_name: 'Florri',
      last_name: 'Platt',
      email: 'fplatt1j@bing.com',
      gender: 'Female',
      latitude: 8.2458715,
      longitude: 4.8118909,
      description: 'Inj flexor musc/fasc/tend l mid finger at wrs/hnd lv, sqla',
      image: 'https://robohash.org/possimusnisiut.bmp?size=50x50&set=set1',
    },
    {
      id: 57,
      first_name: 'Solomon',
      last_name: 'Clougher',
      email: 'sclougher1k@umich.edu',
      gender: 'Male',
      latitude: 50.1509066,
      longitude: 13.0451816,
      description: 'Nondisp commnt fx unsp patella, 7thQ',
      image: 'https://robohash.org/quaeratquiexplicabo.png?size=50x50&set=set1',
    },
    {
      id: 58,
      first_name: 'Catherin',
      last_name: 'Casterot',
      email: 'ccasterot1l@edublogs.org',
      gender: 'Female',
      latitude: 45.697904,
      longitude: 0.964671,
      description:
        'Nondisplaced oth extrartic fracture of l calcaneus, sequela',
      image: 'https://robohash.org/liberononsed.bmp?size=50x50&set=set1',
    },
    {
      id: 59,
      first_name: 'Jecho',
      last_name: 'Simononsky',
      email: 'jsimononsky1m@nsw.gov.au',
      gender: 'Male',
      latitude: 25.953512,
      longitude: 115.685583,
      description: 'Burn of 3rd deg mu left fingers (nail), inc thumb, init',
      image:
        'https://robohash.org/quisnumquamdoloribus.bmp?size=50x50&set=set1',
    },
    {
      id: 60,
      first_name: 'Catharina',
      last_name: 'Seagrove',
      email: 'cseagrove1n@yandex.ru',
      gender: 'Female',
      latitude: -27.3482312,
      longitude: -51.6044276,
      description: 'Sltr-haris Type III physeal fx unspecified calcaneus, init',
      image: 'https://robohash.org/rerumfugadeserunt.png?size=50x50&set=set1',
    },
    {
      id: 61,
      first_name: 'Terese',
      last_name: 'McLeary',
      email: 'tmcleary1o@admin.ch',
      gender: 'Female',
      latitude: 41.6111031,
      longitude: 45.9271436,
      description: 'Laceration of axillary or brachial vein, left side',
      image:
        'https://robohash.org/itaqueconsequaturvoluptatem.jpg?size=50x50&set=set1',
    },
    {
      id: 62,
      first_name: 'Harper',
      last_name: 'Pierri',
      email: 'hpierri1p@wisc.edu',
      gender: 'Male',
      latitude: 21.958688,
      longitude: 103.8854007,
      description: 'Bitten by other mammals, sequela',
      image: 'https://robohash.org/aliasquoodio.bmp?size=50x50&set=set1',
    },
    {
      id: 63,
      first_name: 'Jany',
      last_name: 'Gummow',
      email: 'jgummow1q@squidoo.com',
      gender: 'Female',
      latitude: 1.4604431,
      longitude: 125.1859924,
      description: 'Lacerat extn musc/fasc/tend r lit fngr at wrs/hnd lv, subs',
      image:
        'https://robohash.org/velitadipiscivoluptas.png?size=50x50&set=set1',
    },
    {
      id: 64,
      first_name: 'Nikoletta',
      last_name: 'Midlane',
      email: 'nmidlane1r@mac.com',
      gender: 'Female',
      latitude: 26.6519555,
      longitude: 49.9123454,
      description:
        'Laceration w fb of right great toe w/o damage to nail, init',
      image: 'https://robohash.org/sitenimdolorem.bmp?size=50x50&set=set1',
    },
    {
      id: 65,
      first_name: 'Collen',
      last_name: 'Cowin',
      email: 'ccowin1s@bloglines.com',
      gender: 'Female',
      latitude: 39.46662,
      longitude: 112.094594,
      description: 'Injury of unspecified cranial nerve, subsequent encounter',
      image: 'https://robohash.org/doloremevenietaut.jpg?size=50x50&set=set1',
    },
    {
      id: 66,
      first_name: 'Shaine',
      last_name: 'Howcroft',
      email: 'showcroft1t@digg.com',
      gender: 'Female',
      latitude: 50.9033889,
      longitude: 14.9611203,
      description: 'Inj cutan sensory nerve at ank/ft level, right leg, init',
      image: 'https://robohash.org/sedessereiciendis.jpg?size=50x50&set=set1',
    },
    {
      id: 67,
      first_name: 'Prentice',
      last_name: 'Cordle',
      email: 'pcordle1u@washingtonpost.com',
      gender: 'Male',
      latitude: 31.172739,
      longitude: 115.008163,
      description: 'Corrosion of second degree of lip(s), initial encounter',
      image: 'https://robohash.org/corruptidolorqui.bmp?size=50x50&set=set1',
    },
    {
      id: 68,
      first_name: 'Arlee',
      last_name: 'Theze',
      email: 'atheze1v@salon.com',
      gender: 'Female',
      latitude: 16.7124054,
      longitude: 98.5746649,
      description: 'Other streptococcal arthritis, ankle and foot',
      image: 'https://robohash.org/noncorporiset.bmp?size=50x50&set=set1',
    },
    {
      id: 69,
      first_name: 'Nicki',
      last_name: 'Antecki',
      email: 'nantecki1w@pagesperso-orange.fr',
      gender: 'Female',
      latitude: 44.596097,
      longitude: 129.591591,
      description: 'Anterior cord syndrome at C8, subs',
      image:
        'https://robohash.org/architectoerrordolores.png?size=50x50&set=set1',
    },
    {
      id: 70,
      first_name: 'Lucille',
      last_name: 'Lechelle',
      email: 'llechelle1x@tripadvisor.com',
      gender: 'Female',
      latitude: 34.7728913,
      longitude: 138.0126666,
      description:
        'Infantile and juv cortical/lamellar/zonular cataract, r eye',
      image: 'https://robohash.org/quoautemsit.bmp?size=50x50&set=set1',
    },
    {
      id: 71,
      first_name: 'Granger',
      last_name: 'Owthwaite',
      email: 'gowthwaite1y@dyndns.org',
      gender: 'Male',
      latitude: 45.161017,
      longitude: 1.663862,
      description: 'Postimmunization arthropathy, unspecified site',
      image: 'https://robohash.org/quiasitet.png?size=50x50&set=set1',
    },
    {
      id: 72,
      first_name: 'Clyde',
      last_name: 'Bram',
      email: 'cbram1z@imgur.com',
      gender: 'Male',
      latitude: 32.9320578,
      longitude: 130.5063545,
      description:
        'Glider (nonpowered) collision injuring occupant, subs encntr',
      image: 'https://robohash.org/architectosolutaquo.bmp?size=50x50&set=set1',
    },
    {
      id: 73,
      first_name: 'Theodor',
      last_name: 'Ceely',
      email: 'tceely20@china.com.cn',
      gender: 'Male',
      latitude: -7.216667,
      longitude: 112.083333,
      description: 'External constriction, unsp lesser toe(s), init encntr',
      image: 'https://robohash.org/modiquaeratvoluptas.png?size=50x50&set=set1',
    },
    {
      id: 74,
      first_name: 'Bonni',
      last_name: 'Dennehy',
      email: 'bdennehy21@dion.ne.jp',
      gender: 'Female',
      latitude: -6.4698758,
      longitude: 107.4780383,
      description: 'Hypopyon, right eye',
      image:
        'https://robohash.org/blanditiissapienteet.png?size=50x50&set=set1',
    },
    {
      id: 75,
      first_name: 'Hubert',
      last_name: 'Jopp',
      email: 'hjopp22@ca.gov',
      gender: 'Male',
      latitude: 50.7917257,
      longitude: 21.2322042,
      description: 'Poisoning by antiviral drugs, accidental, init',
      image: 'https://robohash.org/etimpeditmaiores.bmp?size=50x50&set=set1',
    },
    {
      id: 76,
      first_name: 'Wolfie',
      last_name: 'Klain',
      email: 'wklain23@reuters.com',
      gender: 'Male',
      latitude: 12.0518011,
      longitude: 24.8804853,
      description:
        'Sltr-haris Type IV physl fx lower end humer, right arm, init',
      image:
        'https://robohash.org/voluptateseligendiet.bmp?size=50x50&set=set1',
    },
    {
      id: 77,
      first_name: 'Regine',
      last_name: 'Mauger',
      email: 'rmauger24@engadget.com',
      gender: 'Female',
      latitude: 3.1035814,
      longitude: 101.640078,
      description: 'Disloc of proximal interphaln joint of unsp finger, subs',
      image:
        'https://robohash.org/accusamusdoloribuset.bmp?size=50x50&set=set1',
    },
    {
      id: 78,
      first_name: 'Tammie',
      last_name: 'Halliwell',
      email: 'thalliwell25@ebay.com',
      gender: 'Male',
      latitude: 40.039377,
      longitude: 48.9202533,
      description: 'Matern care for disproprtn due to other fetal deform, fts5',
      image: 'https://robohash.org/dictalaborumharum.jpg?size=50x50&set=set1',
    },
    {
      id: 79,
      first_name: 'Patricio',
      last_name: 'Bellfield',
      email: 'pbellfield26@shareasale.com',
      gender: 'Male',
      latitude: 23.106401,
      longitude: 113.459749,
      description: 'Trachoma',
      image:
        'https://robohash.org/assumendafacereullam.bmp?size=50x50&set=set1',
    },
    {
      id: 80,
      first_name: 'Estella',
      last_name: 'Fothergill',
      email: 'efothergill27@mail.ru',
      gender: 'Female',
      latitude: 51.9696042,
      longitude: 18.7966596,
      description: 'Disp fx of distal phalanx of right index finger, sequela',
      image:
        'https://robohash.org/omnisvoluptatemplaceat.bmp?size=50x50&set=set1',
    },
    {
      id: 81,
      first_name: 'Fayre',
      last_name: 'Worsfield',
      email: 'fworsfield28@github.com',
      gender: 'Female',
      latitude: 37.943121,
      longitude: 115.217658,
      description:
        'Arthropathies in oth diseases classified elsewhere, shoulder',
      image: 'https://robohash.org/insititaque.png?size=50x50&set=set1',
    },
    {
      id: 82,
      first_name: 'Niles',
      last_name: 'Carlsen',
      email: 'ncarlsen29@bloomberg.com',
      gender: 'Male',
      latitude: -8.2295368,
      longitude: -35.4672368,
      description: 'Radiographic dye allergy status',
      image: 'https://robohash.org/quiquibusdamfugiat.bmp?size=50x50&set=set1',
    },
    {
      id: 83,
      first_name: 'Reinaldo',
      last_name: 'Tompkin',
      email: 'rtompkin2a@rediff.com',
      gender: 'Male',
      latitude: 53.5324492,
      longitude: 28.187043,
      description: 'Insect bite (nonvenomous) of lip, subsequent encounter',
      image:
        'https://robohash.org/consequaturaliasmaxime.bmp?size=50x50&set=set1',
    },
    {
      id: 84,
      first_name: 'Shalom',
      last_name: 'Crayk',
      email: 'scrayk2b@google.it',
      gender: 'Male',
      latitude: 36.7550603,
      longitude: 66.8975372,
      description: 'Nondisp fx of dist phalanx of r thm, 7thG',
      image: 'https://robohash.org/etsaepequisquam.png?size=50x50&set=set1',
    },
    {
      id: 85,
      first_name: 'Storm',
      last_name: 'Somerville',
      email: 'ssomerville2c@dot.gov',
      gender: 'Female',
      latitude: 53.2685396,
      longitude: 37.3569252,
      description:
        'Insect bite (nonvenomous) of unspecified wrist, init encntr',
      image: 'https://robohash.org/evenietetqui.jpg?size=50x50&set=set1',
    },
    {
      id: 86,
      first_name: 'Eloise',
      last_name: 'Rigg',
      email: 'erigg2d@irs.gov',
      gender: 'Female',
      latitude: -6.3783847,
      longitude: -41.8004409,
      description: 'Laceration of unsp kidney, unspecified degree, sequela',
      image: 'https://robohash.org/quiipsameos.bmp?size=50x50&set=set1',
    },
    {
      id: 87,
      first_name: 'Hanson',
      last_name: 'Prinn',
      email: 'hprinn2e@rediff.com',
      gender: 'Male',
      latitude: 59.397367,
      longitude: 16.4816867,
      description: 'Osteonecrosis due to previous trauma of right carpus',
      image:
        'https://robohash.org/architectoadipisciimpedit.png?size=50x50&set=set1',
    },
    {
      id: 88,
      first_name: 'Peadar',
      last_name: 'Burdess',
      email: 'pburdess2f@abc.net.au',
      gender: 'Male',
      latitude: 48.8315157,
      longitude: 84.606767,
      description: 'Primary blast injury of bronchus, bilateral',
      image:
        'https://robohash.org/suscipitautvoluptatem.jpg?size=50x50&set=set1',
    },
    {
      id: 89,
      first_name: 'Karola',
      last_name: "O'Crevy",
      email: 'kocrevy2g@geocities.jp',
      gender: 'Female',
      latitude: 40.974829,
      longitude: 115.279249,
      description: 'Disorder of left external ear, unspecified',
      image: 'https://robohash.org/oditinciduntcommodi.bmp?size=50x50&set=set1',
    },
    {
      id: 90,
      first_name: 'Gelya',
      last_name: 'Strase',
      email: 'gstrase2h@storify.com',
      gender: 'Female',
      latitude: 29.649109,
      longitude: 117.136252,
      description: 'External constriction of lip, subsequent encounter',
      image:
        'https://robohash.org/corporismolestiaeperferendis.bmp?size=50x50&set=set1',
    },
    {
      id: 91,
      first_name: 'Aron',
      last_name: 'Baldacchi',
      email: 'abaldacchi2i@google.it',
      gender: 'Male',
      latitude: 49.2165148,
      longitude: -122.6562872,
      description: 'Conjunctival hyperemia',
      image:
        'https://robohash.org/necessitatibusutmagni.bmp?size=50x50&set=set1',
    },
    {
      id: 92,
      first_name: 'Devin',
      last_name: 'Plampin',
      email: 'dplampin2j@paginegialle.it',
      gender: 'Male',
      latitude: 12.1348457,
      longitude: 15.0557415,
      description: 'Superficial foreign body of forearm',
      image: 'https://robohash.org/sitautlibero.bmp?size=50x50&set=set1',
    },
    {
      id: 93,
      first_name: 'Calhoun',
      last_name: 'Rawnsley',
      email: 'crawnsley2k@clickbank.net',
      gender: 'Male',
      latitude: -6.2455587,
      longitude: 106.7817741,
      description:
        'Inj l int crtd,intcr w LOC w dth d/t oth cause bf consc,init',
      image: 'https://robohash.org/eiuscommodisit.bmp?size=50x50&set=set1',
    },
    {
      id: 94,
      first_name: 'Sissy',
      last_name: 'Maulin',
      email: 'smaulin2l@shop-pro.jp',
      gender: 'Female',
      latitude: 48.840109,
      longitude: 2.586253,
      description: 'Radiohumeral (joint) sprain of right elbow, init encntr',
      image: 'https://robohash.org/etexplicaboaut.png?size=50x50&set=set1',
    },
    {
      id: 95,
      first_name: 'Lorne',
      last_name: 'Vyse',
      email: 'lvyse2m@google.com.br',
      gender: 'Male',
      latitude: 34.0874479,
      longitude: -5.1784019,
      description:
        'Strain of musc/tend posterior grp at low leg level, left leg',
      image: 'https://robohash.org/fugiatadquos.png?size=50x50&set=set1',
    },
    {
      id: 96,
      first_name: 'Lance',
      last_name: 'Wemm',
      email: 'lwemm2n@reference.com',
      gender: 'Male',
      latitude: -37.3130297,
      longitude: -59.0746886,
      description: 'Adverse effect of predom beta-adrenocpt agonists, init',
      image: 'https://robohash.org/sedmaximererum.png?size=50x50&set=set1',
    },
    {
      id: 97,
      first_name: 'Lilia',
      last_name: 'Boosey',
      email: 'lboosey2o@biglobe.ne.jp',
      gender: 'Female',
      latitude: 27.861901,
      longitude: 83.5443287,
      description: 'Partial retinal artery occlusion, right eye',
      image: 'https://robohash.org/optioveroratione.png?size=50x50&set=set1',
    },
    {
      id: 98,
      first_name: 'Fabio',
      last_name: 'Makepeace',
      email: 'fmakepeace2p@tamu.edu',
      gender: 'Male',
      latitude: -7.5242554,
      longitude: 108.9145675,
      description: 'Passenger of amblnc/fire eng injured nontraf, sequela',
      image: 'https://robohash.org/etimpeditquae.bmp?size=50x50&set=set1',
    },
    {
      id: 99,
      first_name: 'Dennison',
      last_name: 'Skitteral',
      email: 'dskitteral2q@dell.com',
      gender: 'Male',
      latitude: 51.3842543,
      longitude: 58.9999439,
      description: 'Nondisp posterior arch fracture of first cervcal vertebra',
      image: 'https://robohash.org/idetaut.png?size=50x50&set=set1',
    },
    {
      id: 100,
      first_name: 'Sholom',
      last_name: 'Gaffey',
      email: 'sgaffey2r@clickbank.net',
      gender: 'Male',
      latitude: 24.822233,
      longitude: 103.985321,
      description:
        'Nondisp artic fx head of unsp femr, init for opn fx type I/2',
      image: 'https://robohash.org/minimaquiarchitecto.png?size=50x50&set=set1',
    },
  ]);


  const [result, setResult] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStartHandler;
    Voice.onSpeechEnd = onSpeechEndHandler;
    Voice.onSpeechResults = onSpeechResultsHandler;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    }
  }, [])

  const onSpeechStartHandler = (e) => {
    console.log("start handler==>>>", e)
  }
  const onSpeechEndHandler = (e) => {
    setLoading(false)
    console.log("stop handler", e)
  }

  const onSpeechResultsHandler = (e) => {
    let text = e.value[0]
    setResult(text)
    console.log("speech result handler", e)
  }

  const startRecording = async () => {
    setLoading(true)
    try {
      await Voice.start('en-Us')
    } catch (error) {
      console.log("error raised", error)
    }
  }

  const stopRecording = async () => {
    try {
      await Voice.stop()
    } catch (error) {
      console.log("error raised", error)
    }
  }





    return (



      <View style={styles.container}>
        <Text style={styles.welcome}>Speech Recognition</Text>
        <Text style={styles.instructions}>To get started Pres the button</Text>


            <Button title='Click Here' onPress={requestMicrophone}></Button>

<ScrollView>
             <SafeAreaView>
                    <Text style={styles.headingText}>Speech Recognition</Text>
                    <View style={styles.textInputStyle}>
                      <TextInput
                        value={result}
                        placeholder="your text"
                        style={{ flex: 1 }}
                        onChangeText={text => setResult(text)}
                      />
                      {isLoading ? <ActivityIndicator size="large" color="red" />

                        :

                        <TouchableOpacity
                          onPress={startRecording}
                        >
                          <Image
                            source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/microphone.png' }}
                            style={{ width: 25, height: 25 }}
                          />
                        </TouchableOpacity>}
                    </View>

                    <TouchableOpacity
                      style={{
                        alignSelf: 'center',
                        marginTop: 24,
                        backgroundColor: 'red',
                        padding: 8,
                        borderRadius: 4
                      }}
                      onPress={stopRecording}
                    >
                      <Text style={{ color: 'white', fontWeight: 'bold' }}>Stop</Text>
                    </TouchableOpacity>
                  </SafeAreaView>


      <View>
        <FlatList
          data={people}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'row', paddingBottom: 40, width:3000 }}>


                     <Image
                        style={{width: 70, height: 70}}
                        source={{uri: item.image}}
                        resizeMode={'cover'} // cover or contain its upto you view look
                        />

                        <View style={{flex:1 ,flexDirection:'column', flexShrink:1, flexWrap:'wrap', flexGrow:1,}}>
                            <Text style={{ paddingLeft:20, paddingTop: 10, fontWeight:'bold'}}>{item.first_name}</Text>

                            <Text style={{ paddingLeft:20, paddingTop: 10, flexShrink:1, paddingBottom:20, fontSize:13 }} >{item.description}{"\n"}</Text>

                        </View>

            </View>

          )}
        />
      </View>

</ScrollView>
      </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    alignItems: 'center',
    backgroundColor: '#9ED2A1',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontWeight: 'bold',
  },
});
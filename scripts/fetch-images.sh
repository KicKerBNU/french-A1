#!/bin/bash
set -euo pipefail
export PATH="/usr/bin:/bin:/usr/sbin:/sbin:/opt/homebrew/bin:$PATH"
ROOT="/Users/evertonbuzzi/Dev/fr-fr"
cd "$ROOT"
mkdir -p public/images/{covers,topics,people,kinds,how}

while IFS='|' read -r path id; do
  dest="public/images/$path"
  mkdir -p "$(dirname "$dest")"
  url="https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1100&h=800&q=72"
  if curl -fsSL --retry 2 --retry-delay 1 -o "$dest" "$url"; then
    echo "ok $path $(wc -c < "$dest" | tr -d ' ')"
  else
    echo "FAIL $path"
  fi
done <<'EOF'
covers/home.jpg|1554118811-1e0d58224f24
covers/u0.jpg|1488646953014-85cb44e25828
covers/u1.jpg|1521017432531-fbd92d768814
covers/u2.jpg|1497366216548-37526070297c
covers/u3.jpg|1502602898657-3e91760cbb34
covers/u4.jpg|1511895426328-dc8714191300
covers/u5.jpg|1493770348161-369560ae357d
covers/u6.jpg|1441986300917-64674bd600d8
covers/u7.jpg|1414235077428-338989a2e8c0
covers/u8.jpg|1504280390367-361c6d9f38f4
covers/grammar.jpg|1455390582262-044cdead277a
covers/vocab.jpg|1543002588-bfa74002ed7e
covers/communication.jpg|1529156069898-49953e6953a3
covers/delf.jpg|1434030216411-0b793f4b4173
how/open.jpg|1522202176988-66273c2fd55f
how/lessons.jpg|1503676260728-1c00da094a0b
how/daily.jpg|1495474472287-4d71bcdd2085
how/project.jpg|1529156069898-49953e6953a3
how/bilan.jpg|1434030216411-0b793f4b4173
topics/croissant.jpg|1555507036-ab1f4038808a
topics/coffee.jpg|1495474472287-4d71bcdd2085
topics/bread.jpg|1509440159596-0249088772ff
topics/breakfast.jpg|1533089860892-a7c6f38a73fe
topics/tea.jpg|1544787219-7f47ccb76574
topics/market.jpg|1488459716781-31db52582fe9
topics/salad.jpg|1512621776951-a57141f2eefd
topics/pizza.jpg|1513104890138-7c749659a591
topics/restaurant.jpg|1517248135467-4c7edcad34c4
topics/kitchen.jpg|1556909114-f6e7ad7d3136
topics/table.jpg|1414235077428-338989a2e8c0
topics/train.jpg|1474487548417-781cb71495f3
topics/plane.jpg|1436491865334-9d4fbb8aa461
topics/suitcase.jpg|1565026057447-bc90a3dceb87
topics/hotel.jpg|1566073771259-6a8506099945
topics/rain.jpg|1428592953211-077101b2021b
topics/snow.jpg|1418985997020-0adf34224c27
topics/forest.jpg|1448375240586-882707db888b
topics/desert.jpg|1509316785289-025f5b846b35
topics/mountain.jpg|1464822759023-fed622ff2c3b
topics/clothes.jpg|1445205170230-053b83016050
topics/bike.jpg|1485965120184-e08b76f1c36b
topics/passport.jpg|1544986581-efac924eb0e0
topics/city.jpg|1508050919630-b135583b29ab
topics/family.jpg|1511895426328-dc8714191300
topics/phone.jpg|1511707171634-5f897ff02aa9
topics/clock.jpg|1501139083538-0139583c060f
topics/notebook.jpg|1455390582262-044cdead277a
people/lina.jpg|1531123897727-8f129e1688ce
people/maya.jpg|1524504388940-b1c1722653e1
people/noah.jpg|1507003211169-0a1dd7228f2d
people/tom.jpg|1500648767791-00dcc994a43e
people/server.jpg|1577219491135-ce391662fb9c
people/host.jpg|1544005313-94ddf0286df2
people/agent.jpg|1560250097-0b93528c311a
EOF
echo DONE
ls public/images/covers | wc -l
ls public/images/topics | wc -l
ls public/images/people | wc -l

---
layout: post
title: Contact
categories:
 - contact
---

<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=b39590003fae695d5cd234d45edf0e58"></script>
<script>
    var container = document.getElementById('map');
    var options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
    };

    var map = new kakao.maps.Map(container, options);
</script>

<div id="map" style="width:500px;height:400px;"></div>
<div class="bigspacer"></div>

<address>
    <table id="address">
        <tbody>
        <tr>
            <td><h3 style="text-align:middle;">Address</h3></td>
            <td><span title="[03722] 서울특별시 서대문구 연세로 50">[03722] 50, Yonsei-ro, Seodaemun-gu, Seoul, Republic of Korea.</span></td>
        </tr>
        <tr>
            <td><h3 style="text-align:middle;">Office</h3></td>
            <td><span title="공학원 212D">Yonsei Engineering Research Park 212D</span></td>
        </tr>
        <tr>
            <td><h3 style="text-align:middle;">Email</h3></td>
            <td>daehoonkim<span style="display:none">obfuscate</span>@yonsei.ac.kr</td>
        </tr>
        </tbody>
    </table>
</address>

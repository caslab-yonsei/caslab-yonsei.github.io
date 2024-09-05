---
layout: post
title: Contact
categories:
 - contact
---

<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=b39590003fae695d5cd234d45edf0e58"></script>

<div class="row">
    <div id="col-md-12">
        <div id="map" style="width: 791.66px; height:445.3px;"></div>
        <div class="bigspacer"></div>
        <div class="bigspacer"></div>

        <span style="font-size: 1.563em;">If you are interested in CASLab, please contact us.</span>

        <div class="bigspacer"></div>
        <div class="bigspacer"></div>
        <address>
            <table id="address" style="vertical-align:middle;">
                <tbody>
                <tr>
                    <td style="text-align:middle;"><span style="font-size: 1.125em;">Address</span></td>
                    <td><span title="[03722] 서울특별시 서대문구 연세로 50">[03722] 50, Yonsei-ro, Seodaemun-gu, Seoul, Republic of Korea.</span></td>
                </tr>
                <tr>
                    <td style="text-align:middle;"><span style="font-size: 1.125em;">Office</span></td>
                    <td><span title="공학원 212D">Yonsei Engineering Research Park 212D</span></td>
                </tr>
                <tr>
                    <td style="text-align:middle;"><span style="font-size: 1.125em;">Email</span></td>
                    <td>daehoonkim<span style="display:none">obfuscate</span>@yonsei.ac.kr</td>
                </tr>
                </tbody>
            </table>
        </address>
    </div>
</div>

<script>
    var container = document.getElementById('map');
    var options = {
        center: new kakao.maps.LatLng(37.5608403, 126.9354738),
        level: 3
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(37.5608403, 126.9354738); 

    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    marker.setMap(map);
</script>


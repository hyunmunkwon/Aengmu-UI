<template>
<div id="body"> 
  <div id="chat-circle" class="btn btn-raised" @click="clickChatBoxToggle">
    <div id="chat-overlay"></div>
    <img src="data:image/png;base64,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" 
    style="width:45px; height:45px; position:fixed; right:94.35%; bottom:7.7%" alt="birdboxicon">
  </div>
  <div class="chat-box" id="chat-box">
    <div class="chat-box-header">
      앵무
      <div style="float:right;">
      <span>
        <button type="button" id="chat-fullscreen" style="clear: right;"><i class="material-icons">fullscreen</i></button>
        <button type="button" id="chat-closefullscreen" style="clear: right;" hidden="hidden"><i class="material-icons">close_fullscreen</i></button>
      </span>
      <span class="chat-box-toggle" @click="clickChatBoxToggle">
        <i class="material-icons">close</i>
      </span>
      </div>
    </div>
    <div class="chat-box-body" id="chat-box-body">
      <div class="chat-box-overlay">   
      </div>
      <div class="chat-logs" id="chat-logs">
      </div>
      <div class="select-button-body">
        <button type="button" id="cm-refresh-select" style="float : left; margin-top:9px;"><i class="material-icons">autorenew</i></button>
        <button class="cm-select-button">AWS</button>
        <button class="cm-select-button">공상평</button>
        <button class="cm-select-button">날씨</button>
        <button class="cm-select-button">코로나</button>
        <button class="cm-select-button">클라우드운영혁신팀 위키</button>
      </div>
    </div>
    <div class="chat-input">      
      <form>
        <input type="text" id="chat-input" placeholder="Write a message..."/>
        <button type="submit" class="chat-submit" id="chat-submit"><i class="material-icons">send</i></button>
      </form>      
    </div>
    <div class='resizer'></div>
  </div>
</div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
<script src="https://rawgit.com/RickStrahl/jquery-resizable/master/src/jquery-resizable.js"></script>

<script>

import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import $ from 'jquery';
//import VueResizable from 'vue-resizable';

const sessionId = uuidv4();
const titleImageUrl =
  "https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png";
var INDEX = 0;
var buttonIndex = 0;

export default {
  mounted(){
      //default로 동작하는 작업!!
      $(document).ready(function(){
        // $('button').detach('.cm-select-button');
      });

      // $(".cm-select-button").click(function(){
      //   var tmp = this;
      //   $("#chat-input").val(tmp.innerHTML);
      //   console.log($("#chat-input").val());
      //   $("#chat-submit").trigger('click');
      // });

      $(document).on("click",".cm-select-button",function(){
        var tmp = this;
        $("#chat-input").val(tmp.innerHTML);
        //console.log($("#chat-input").val());
        $("#chat-submit").trigger('click');
      });

      $("#cm-refresh-select").click(function(){
        $('button').detach('.cm-select-button'); //밑의 버튼 다 삭제
        let str = "<button class=\"cm-select-button\">AWS</button>";
        str += "<button class=\"cm-select-button\">공상평</button>"
        str += "<button class=\"cm-select-button\">날씨</button>"
        str += "<button class=\"cm-select-button\">코로나</button>"
        str += "<button class=\"cm-select-button\">클라우드운영혁신팀 위키</button>"
        $(".select-button-body").append(str);

        // let utterance = new SpeechSynthesisUtterance("muyaho");
        //  utterance.lang = 'ko-KR';
        //  speechSynthesis.speak(utterance)
        //speechSynthesis.getVoices().forEach(c => console.log(c));
      });

      $("#chat-submit").click(function(e) {
        e.preventDefault();
        var msg = $("#chat-input").val(); //메시지 입력
        if(msg.trim() == ''){
          return false;
        }
        generate_message(msg, 'self'); //사용자가 입력한 메시지 출력
        onMessageWasSent(msg); //앵무의 답변 내용
      });

      
    $("#chat-fullscreen").click(function(){ //전체화면 버튼
        console.log("startFS");
        const a = document.querySelector("#chat-box")
        const b = document.querySelector(".chat-logs")
        const c = document.querySelector("#chat-input")
        a.addEventListener('fullscreenchange', (event) => {
        // document.fullscreenElement will point to the element that
        // is in fullscreen mode if there is one. If not, the value
        // of the property is null.
        if (document.fullscreenElement) {
          b.style.height="95.5%";
          c.style.bottom="10%";
          // console.log(`Element: ${document.fullscreenElement.id} entered fullscreen mode.`);
          $("#chat-closefullscreen").show();
          $("#chat-fullscreen").hide();
        } else {
          b.style.height="370px";
          c.style.bottom="0px";
          // console.log('Leaving full-screen mode.');
          $("#chat-closefullscreen").hide();
          $("#chat-fullscreen").show();
        }
      });
      a.requestFullscreen();
      
    });

    $("#chat-closefullscreen").click(function(){ //화면 축소 버튼
      //console.log("closeFS");
      document.exitFullscreen();
    });

    },
  
  methods: {
    clickChatBoxToggle(event){
      $("#chat-circle").toggle('scale');
      $(".chat-box").toggle('scale');   
    },
    openChat() {
      this.isChatOpen = true;
      this.newMessagesCount = 0;

      const chatbotTitle = document.querySelector(".sc-header--title");
      chatbotTitle.innerHTML = "앵무";
      chatbotTitle.className = "sc-header--title";
    },
    closeChat() {
      this.isChatOpen = false;
    },
  },
};

// function format_two_digits(n) {
//   return n < 10 ? "0" + n : n;
// }

// function time_format(d) {
//   let hours = format_two_digits(d.getHours());
//   let minutes = format_two_digits(d.getMinutes());
//   return hours + ":" + minutes;
// }

//입력받은 msg의 말풍선 생성(user == 앵무 , self == 사용자)
function generate_message(res, type) { 
      INDEX++;
      var msg;
      
      if(typeof(res) == "object"){  //백엔드에서 넘어오는 res가 fallback인 경우 string으로 넘어오고, fallback이 아닌경우 object로 넘어옴,... 표준에 대해 이야기하고 로직을 다시짜던지.. 해야함.
        res.data = res.data.replace(/\n/gi,"\\r\\n"); //텍스트에 개행문자 후처리
        res.data = JSON.parse(res.data);
        msg = res.data.text;
      }else{ //response가 String 일 경우 
        msg = res;
      }
      var aengmuIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAADNCAMAAAC8cX2UAAAAkFBMVEX///8fHx8cHBwaGhoYGBgTExMWFhYREREAAAAODg4KCgr7+/sgICD5+fn09PTq6upPT089PT0sLCzt7e2VlZXa2to1NTXU1NQwMDBzc3Pl5eUnJye+vr5dXV2np6dERESAgICfn5/ExMSMjIyxsbGioqJqampMTExWVlbLy8txcXHBwcFjY2N9fX2QkJCHh4cIdc3tAAAUx0lEQVR4nO1dCXuqOhNuEkggIIIIKIu4IEJF/f//7ptBe9q6om1V7ud7l+ecijRDkpl3lgxvby+88MILL7zwwgsvvPDCCy+88MILL7zwwgsvvPDCCy+88DcwZtajh/AAGLnmPXoM90eYaHL66EH8FjoWwGhwYTzQiYz/fDx/DzcejTeJk9pFMtzMS/fcxg1XukKIzO42uL+BVfYXvhC64IxxzvEPg3QTnLi6u4p0SqOWi21Nx76mc0YZ10F0XYV/FcqYri7izuHl4dqUlPK8Ym0WO8xSVQeRhaBOsunH8zib93Mngr9TrtjrPW3dHS10ShRz7dotFjucODCzVAh/FQfdT11mBfHQhJXM9d5mFLiGZQCsMNvA5YSLInjr+rS1Yi9tCRMtzU3QPfzQm0SS4yMxnSItAM5AF4xyzR6BuisjqrXTgIW55ERRnMw9cYEbL4ioN70Cig7UHeOC21ty1he0d+p7zwwjSwWhcjE6MtH/YAWTwmeSSl1KyRWn2Ey3hs1KmVrdZ6C/CqtPYaqj8Tmha3S6ZbacxKNJBrv/n2afKERr4dbu5pQSdbC88euWz4h2yq4/L7o22t4ivPX7E0kILX9zRPeANZSE0uHNKmkaUUKixfDiDnku9GGyeP8IBWsGb8EJgGvtmu+gR4me3xwkWPq11LBe2uVwD3XC/Jv3dcwUshXbb1V4JTMpEf1bv10CUwORQWwx/M1R/TW6DiNqdetEWYWmEV33e6RlhnvNCY1u35VlGQRZmSmEDdpEToMBLPHVT+8yk0S/eZ88An3QZ87N+myHANiO+OlN7omurRD1p5MdppyorVJosUqoeSsV3yG0BayYVnGVXCW8uJmf1XBteHS94K1FVjtMGdFHP7pFN9WRqkyy6c+e3j0xAus1+JEuMiqtpmhSY+3xRCpOeHLqw3A0yS7uWGOiSKkzYCub3x3aH6KzgDU+O/Fh7GuA8aV7GMt5f2ZTaraHrXhAx/mJCS2ZHq0qIecN7pNRorWIrcSwtU/5XrlEFpPr5uVg0bTHWkVN1zpRFscNTxDVrkWs6Rd5SAnmoFV+SKUS8X78o41ep+k7gkUXNH3sc6K1iaNZ4HPKE3sy4XUotCOodj5vjSElNWkRV3lz0dU+QVZmqoafxBqRp1T9FrEEetuqcJK7UE6KvRbMcettwIuzN8mQkLeHoAEsEJud0EV9kHfw7nBySahSoZS3a7ZhkZv5ZuQd2ZlrFRinyurQ4FnbVGdEJn81xL+AC5bHpLqk9uhgukbbKDCK3TtPtoe4D9rDx0EJO0DSNCY0KQfjPVYSKPRD7AsKqwTO04DTPA3CghO5CEJvamvARL+TVK/3T2x2XuwOKsYWrfKxJGK1VVcTSfj3GTNW6k7sUzzu8z6wyu3WGG7PZyz9qE9JOBHVt8K7kuymm+cXbgQmjJLWrPK5RvTxx1/WMN3JN7GtxU6pyUvRlxD2A28NJ5+BH2LDanaxwhBme39/9sV2su1LWtqqlBYFTtcglmknjsJ6qQMbmc2+V5daBcqtRJfncc3gAbbFhE1rfcUZpVTB9B3hm+9yB47Upd9g9aIaOMX2ng2uDaKqmhRShX8ox4D53tAxmNYkvmjZSmtyQRONMC3PpmVZemXpBrlGuHObGTIw2n7Cb38ylBFV/G8MZQXK/MaQ+VwSlrbBcneGnNLvtrZr0tPB4/MAr7wdPnfg00+jvcNGp/S2VMESxFbakPFcc2rujxPmTNyWwCsx8PzDBOI9AI6GesA5A43y26qEQxBbaYEFAxp9GOLt9ijvNzkQcwB03EkLxI5B7IP17PqUkptWOSaV1PORxqfAXBB54DOB2ETcNGcWfFNvQeqvrx4ROwAOfqMnVXDC1j8e1Z9jxYk8sLPvILZ6k9gGsFPRArFnR+q/M8zP32aGML3ShkWeyQNN7g0YqWtQbkCdVWrBbGf6fomo1+N1cPgmrmWAARPj3xjY36Ic0O9HWsoBcHQQ+1J68wRScGOq589wG7n4luyYC4X0HHopA3ISXqFRmj4/YRmZ9Av/HoETQjPgHBfSfKfRmWlUUfNnd0eMXP1M6Ls2J+qqlORktrsBMp1R0Xv2CQ8czj+0dhBRagbvKqHsB+HusqcSdns9/p3QJ+Kj6rKvE5r2wX6pN4YZtggKQSh/f+6F7iZc7pZ5pRJzQECh/bC9QphI4Obpc8udCaqt0M/s2LujPcpPE3jGGuRWF08dXrLeOdWKYMuo68zmL+ijSQ/MQfrURdZWrlOVTawy2ib5mtQbXkQWgdyDp55vd6JxKgfmVmrld2jWhFOY76eW+y0uVAGslKrUBLnX10SUwvWJerWpCfP94+MnfwsjG4L31MvjCoyPeUV2wChOBpczYPdK8txyv711gzLcFhNS3rxRTl87rQpQbtmSso4lYURxmrK0wI9OJ3+MCh5hryVyxyC32vSAz1g7d4oqXIiLlT5Pg+VAAduzbNQ6ip0/rF2CE6vaz769d4gHWGK2amDHZlI9f1XM8Ex4S0pRS0chVLs8Wivh9MIlY1BrvAXhtRplD2zP5Ux1OJCXsvidd3Dr2pAOBNa28YG17BVqHUPJL5+IcdEitqEWtZvjeS5ymAo9QKw1OAiE21tevtej0dmVW+qXd+RGbyC2MdGvIkAPwgx7xkSEiMsUdaw3Cbph0kBJnzyMXAowtQnY2wYNwGaNxH6Lscjh+hyRZd3P8HULTngxHdAm2b+ZaHbIbwzLvEEV4yc6XtZ/T51iOMu8u8ieMUqV0hOwty/z03VDsUMbu3xcGH/olUFQbwVvlEdCVxXGVV2P8jtYARcGKFb16SZ6+deNpGimomOYbvNc1MaNK5+olKZxNxuaOqeMS02THNRMAx3zYywVYFVLrDpmzmWxJ4KqjW5rJOqZziSdZUGkikWvlJuRJigTql/MRtmoAkuq3yHVMMbTXO7b+8VjXzViGGGzSEwc0VNHzYJZipEdlffMuiMT17jzHteNJ90CbID/94u8A79HHdcFDbxBc78SmHtDt3IFz/NIRNHwNj2pwPRGw3VO69P+9sTbLQsLiS25g8VHE4t7CWtm7cuXeyZteoTX89kRAlTm2AlXaP5mmqWMcM0cf3qp7gYUqxw3HfsP0MXeYSBIzglrIHbXYXzR8NYjClrtm3Fwp4nEbrEsjzvBQuNCK7Iv2j4sNNjY43vYr6m6zehXzfrGdMDxbHpO3cPirS+hGCN2dPhtIqriN2sodI1U35azZwNbVFZ3qVceyW1GHxZ5A08EduyxAq/jMPqwu9MP9dSJEwo+vc7fvbfOyNE0Z/5942M8CsZyH89tBM8fa+iHzVQa1r7oTVsSYdJF3TreIDQDIy3UTQBCp5pmx3uzGuCpFWDy94lHZXJbrbPRm53x8VLGmh416GKXE6Rq3djXsB2w2Ye5zHqaVh3wwZjVWch7VT1lSFOsNwPtdqPutLjKm9KJ+pl6Vt8UYI3FABuddyagxw5J8ETSbXvBOwVd5+q2JccQ9najQx/gXB0ccDTi41ouxINDQxtWtyLTdb18rcLJDlX1WgOp66zUteO/ESOxVSO1+mliOgxw2PbzIp3F4rgmQjvMFcLUdLO7wAgPd4jxLimNoiYH7n4L6DJgv845BkQa/VJcuWTvylw7TkOzesOKwfwcoQ0XGuO9IYh9v+PBHmpb2GuBDkyh0cbqOIeH9Pva+1HBAo6Ld3NWO8eRYFE/BkeQV3eLO1oJrw+wuTCFF4+ybjHXCN0j26XmHN3dxjsH+3i2A/hKcll5FvAG5t/xcPAYLFeFW1Y53VvqO7qOQsT3TIInleOB8ZidL+t0C03tjSwjh52j/EpRRUPguXUbZJicbje0jwwV1bdl3h3I4xzGw/aapxeR52h6Er511rDFftyY8SpgU6leiYFE0G3NchkddNe+6+5CP66ErRXygVMKLVM0f27BRQIezu19s29BiCnKyfYIetNzAFMK137bEYk4UY8eq3UU4xissSYT0BHuELiKuEcA7QuMHBt/wnyscJU3e+IGkJtPJwORqOx4cAAtxfGDYt5Cs7GLYpngqw/G9z4oGlNKUYfGWH/aMLARDBj5tpsTfqJ/M7YxOraIjJmWLlHULAKp9fe7H4/t+owIXOXYXqopOdyAD/n1LBG44SdKlDA2mR78NEjZBiXt9FVKePSIsg9gkHXmBn3PpGFow8KDUF/8BhC7d5zsYD5sv8WmMU8m9Y+8d441mw9p5oHbj4GRmdArOliXKaiEz1qsCvzK46mkJbojex8ZOxWS+fA1efsLH34Ea7gNFnf95roc6Tb9UnsHnvW+bDu4J5uUdGaKQji/r+H6gnhXfjC+qof1HNens1sdxaHYy/5WHjDyYnzEcseJhtU95U1Han8DLixYAb5EcGCOzyIDbaRua4q7DqPRnhXwtsXbGJc40iy5s6bg6Wvvjyx6wM6+uDUxgdMgI/SBOQGvyUdpQT0cHgku9PpBrEFjHjRemla4Vgazh5Z6uLBG1dx4m5rXNQuqa6mxvcUUteG+Pu5rdSgWyf6e2N0RGmtpP7odE8ZYyPTNsDHVfYWKWYLc1My8FSfKge3LNAV3/kju+TidzJForGcPL3fwYHfjlNRVCNcc8cF3i9D6TRv8QCnEsva9JvBIvypKrzBB/2nVoys0Xc/rTtER6RtGnf+8xo5mvsBMMXYZ25+8Uq0b8Kw5+dLWxZr0wFZzZ/7gqQ7HPjX9DeaVtclbgPm68VXf7zuU6yr4y3uNmd7CSMWFj/24Pj6zsgJ8TM43D+9Qk2iMUqYOHOx3mWHV0rUnZqwwLIeg08Qes3Z7CpI+UGm7d9UYI0cHm6EXjYp6/xSovIkKiglT7Gww7S6+k+2G6CBN22uB7fYYvipsBDfW53DJNMHYsR6tH67Ktuf+en3MP5lYfjmIw/otK1cnWz2ww3u7A2ipCuJueF3xFucM80GD/qNVWY36PRtBUOi7Q0JROYdh3tBTZA0q/XsPTRQbFvcMSxaGFceyDXXzJKWomNYX8zd3xdVacO6UFT6Jqz1gLLDl6VcCAmLzvIMON9y2zvxtnmKma4wxPgQsMq7M7avc/H5x00FArNHRv+6OWmwD30OFST1Y3o8mZV8VKYZ0FT4EbRQ7ddqR+XYKLrJ59WHXPjY//mK9w4iqQ8wdwY/1wftDZzrYDJM8SfI8H0/Wk9F61E9MHBZGN7tjIXAj0h5KT69d551cA9v/qRViibHJAlUFGT9UaKtiUqiCc6Gq+P5VTcqdLttmtYI8EqCSt7lmmVypf6wNnqRbf6zzviR8uIGHqj66ph6PGyu6AIGFLkB6VeXwP/jv32slgolNuaRRBMMVzpVHH6wCCID8eFPkWNSLhohHn28OBzCsajLJ5qP1erWqkqqqCnuYFMXqU910gjJep2ZtztjwOjXkJfzfe0G7dq3LmJ4/WpVh+MTsB3E2df9pXKPzZhh7ZDFzzO3LC0H/no0EWN0w7H4tAsdj+1QsUB0u8R2hQvPP5rbvghD8S6Lim3GoU63ncXDU1+qsOSMs2k441ciqPMLZOu5bNxv7Ebhfkd0Py2CnwTuYz+JilWVYoG6P9guSHgFjKNFNZLXzASpNDIrhKNvvxD+BNUEXRYSdb1G/qUoyij33c9LcMhsu0qR+KX1dJKxSXUTVNvTd6fdgoQsNtcjg0ct7Bzd7X/QGqWNSqdfNfLmqC9NerfrL8GNKsRcLs+c9lL1K0JaBjlNpWg1n8zIoA2+2YEIojDMGqjHargl03+RgSz3LYqsY5InI+UPQcV3LCoP5uHAGTAfpQXYhpOgtknVd3FyCUopG4FFhKMjLgbkIdBcZV4WuUs5MHf6APR14tFlO571aYk2DJwPWvxZ0gppBpA9nZSdghfFkbPc4GDNOmcKlRtPNciJgsvFVyzx7C2xBpTMcJzV9U5Rt4fsgX6F7iinPLmZUSA7Kf5QzpHuzYDpUQHH6T959puNNsw0ITySWtjOdR1gVN+rBlJdGBdO7tt4M5CF8YdsOeOW1uFaPatk2O8w+WluPfIw16BLNtemPs8B9uA6/hE4YjMZFhNNekzbbB7G9TFARo1UCc0/fLcvqBgXb1pMvGNZkBdFHyLFbZjPfhMvov61u+kk1m4ZPf7i3E8YzG7TV7tUDdF3wugXcBgisnNX63rIVHQNh4K/S3sp2ttnCzih3CPB5LKrjmia4rukqq9WBiBbVZhZ73Sef+TBfDHaSw8xjeSn6aB/hYAvUvGDpwsQ+goIjD2ObfipVxpDoJ54bBkEYBtm4ckAVgsKnCtdh4av2cD71niTIcBRWOLZh7lSMfsNsW0PY2NEyDOv5WkYqzCIYP7B8UtdxT6hSASYeLYrV9KtYVhCPNmkPhFfRVnLwBEAZ9rPp88pueVk2dLDHVFRmKL5p9pxqtQZq461Qr0WDfJKNRlnWk2AEhBxMvM6xTWyF03k/TxyiyW2bF13VnRzu87Rr3ggD4LJ0UDcgghEzrkvVTN9nmRcCdld5m2KQDi907DcsL54Pix7XkCQxsPuRPTn2mqbnwETltaEGmkJVoDQwZgV8Vaeaf1mpRtPzqCD8fLxwKJoLuKfeW8VP2roisyls3yqbel4J1KbygZayms+b9iwLbtmlsH/GFVhK2O5CZ/mdDrJeCWuaZV8csHA5Wjmg7fAFaLrk/vt6edNa9eA2UldwDUVJ9gTpgstwg3W+iLSa04GGitJ8Xt4wcDdep5FW757FE7ksZ2GE2bgYELXe7aL2Osvr6VjHm+QE5lwbPq1ePwLXy1bFgErcpqqUbFEM5551pQTBehGlbZntfzDC5WTo1Fwe6JiQPE3m5ZHjIGdgea3Y24dwQUPZkdjxcKH2Fu/96dNa5d+FW2bjfKCAZWJMgTXvDCfTlk7j1bDKLE99JtWascpBMblFybcSVrfsr2xaByu5VJ3N4Tsz/7Owgv5qoaGSh1nvVc+Ry78PjDIb+lQiAZdmso7/j0TvlPPC5CpKrkXDdtDQ34ERjMD1wJgzuNrj0fMGGX4f4HUVugASL4Q/Xz5vjOH3YcSrATpdDBi8vXnSzMGfwCrXC3Vn11rRNPDXYMXjRQT89Uxn3P8orHC6Ku5+2u0p8H+k01544YUXXnjhBcT/AMs6Xtf4dXV2AAAAAElFTkSuQmCC";
      var str="";
      str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg "+type+"\">";
      str += "          <span class=\"msg-avatar\">";
      if(type=='user') str += "            <img src="+aengmuIcon+">";
      str += "          <\/span>";
      str += "          <div class=\"cm-msg-text\">";
      str += msg;
      if(type=='user'){
        str += "\n<button id ='speak"+INDEX+"' style=\"float:right\"><i class=\"material-icons\">keyboard_voice</i></button>";
      }
      str += "<\/div>";
      // if(type=='user')str += "<button id ='speak' onclick=\"speakMsg(msg)\"><i class=\"material-icons\">keyboard_voice</i></button>";
      
      str += "        <\/div>";
      let aa = $(".chat-logs").append(str);

      var speakbtn = document.getElementById('speak'+INDEX);
      var spkbtn = '#speak' + INDEX;
      //console.log("speakBtn : " + spkbtn + " : " + speakbtn);
      if(speakbtn != null){
        $(document).on('click',spkbtn,function(){
          //alert(spkbtn)
          console.log("msg : " + JSON.stringify(msg));
          let utterance = new SpeechSynthesisUtterance(msg);
          utterance.lang = 'ko-KR';
          speechSynthesis.speak(utterance)
          //speechSynthesis.getVoices().forEach(c => console.log(c));
        })
      }
      
      
      //$("#cm-msg-"+INDEX).hide().fadeIn(300);
      //console.log("typeof resdata : " + typeof(res.data) + " " +typeof(res));
      if(type == 'self'){ //사용자
        $("#chat-input").val(''); 
      }else if(typeof(res) == 'object' && res.data.hasOwnProperty('fallback')){ //fallback인경우 ==> fallback인 경우와 대화형 버튼인 경우가 구분이 되어야할 것같음. 현재는 둘 다 button으로 되어있어서 분기가 어려울 것같음.
        //console.log("fallback");
        addFallbackButton(res.data,INDEX);
      }else if(typeof(res) == 'object' && res.data.hasOwnProperty('Button')){ //fallback 아니고 response 객체에 버튼이 존재할 경우
        addButton(res.data);
      }

      autoLink("cm-msg-"+INDEX); //말풍선안에 url이 있으면, 이를 감지하여 링크로 만들어줌.

      $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);   
      // if(type == 'user'){
      //   generate_button("aws");
      // } 
      if(type == 'self'){
        // addButton();
      }
}

function onMessageWasSent(message) {
      //message.data.meta = time_format(new Date());
      const userMessage = message;
      const url =
        "https://asia-northeast3-cns-cnl.cloudfunctions.net/function-cnl-aengmu-user-interface";
      const data = {
        uuid: sessionId,
        text: userMessage,
      };

      setTimeout(async () => {
        await axios
          .post(url, data)
          .then((res) => {
            console.log("res : "+res);
            console.log("res data : " +JSON.stringify(res.data));
            // console.log("typeof res : "+typeof(res)+" "+typeof(res.data));
            generate_message(res, 'user');
          })
          .catch((res) => {
            res.data = "앵무가 지금 아파요...";
            generate_message(res.data, 'user');
          });
      }, 1);
}

function autoLink( content ) { //url 인식하여 링크로 표시하여줌.
  var container = document.getElementById(content);
  var doc = container.innerHTML;
  var regURL = new RegExp("(http|https|ftp|telnet|news|irc)://([-/.a-zA-Z0-9_~#%$?&=:200-377()]+)","gi");
  var regEmail = new RegExp("([xA1-xFEa-z0-9_-]+@[xA1-xFEa-z0-9-]+\.[a-z0-9-]+)","gi");
  container.innerHTML = doc.replace(regURL,"<a href='$1://$2' target='_blank'>$1://$2</a>").replace(regEmail,"<a href='mailto:$1'>$1</a>");
}

function addFallbackButton(data,INDEX){ //fallback button 추가
  // var google = "//"+data.fallback[0].google; // "//" 추가하는 이유 : //를 추가해줘야 절대경로의 상위로 이동하여 올바른 url을 찾아갈 수 있다.
  // var wiki = new String("//"+data.fallback[0].Wirewiki);

  // var added = `</br><div class=\"cm-fallback\">`
  // added += `<button class=\"cm-fallback-button\"><a href=\"${google}\" target=\"_blank\" style=\"color:black; text-decoration:none\">google</a></button>`;
  // added += `<button class=\"cm-fallback-button\"><a href=\"${wiki}\" target=\"_blank\" style=\"color:black; text-decoration:none\">Wiki</a></button>`;
  // added += `</div>`
  // // console.log("added : " + added);
  // $("#cm-msg-"+INDEX).append(added);
  //console.log(data);
  var added = `</br><div class=\"cm-fallback\">`
  for (let i=0; i<data.fallback.length ;i++) {
   // console.log(data.fallback[i].url);
    var url= "//"+data.fallback[i].url;
    //console.log(url);
    added += `<button class=\"cm-fallback-button\"><a href=\"${url}\" target=\"_blank\" style=\"color:black; text-decoration:none\">${data.fallback[i].text}</a></button>`;
  }

  added += `</div>`
  //console.log(added);
  // console.log("added : " + added);
  $("#cm-msg-"+INDEX).append(added);

}

function addButton(data) //답변에 따라 동적으로 변화하는 버튼 추가 로직
{
  $('button').detach('.cm-select-button'); //밑의 버튼 다 삭제
  // console.log("button data : " + Object.keys(data.Button).toString);
  // console.log("button data : " + data.Button[0]["button1"]);
  // console.log("button data size : " + Object.keys(data.Button[0]).length);
  var numOfBtn = Object.keys(data.Button[0]).length;
  for(let i=0; i<numOfBtn; ++i){
    let btnNum = "button" + (i+1);
    let btnName = data.Button[0][btnNum];
    // console.log(btnName);
    var btnApnd = `<button class=\"cm-select-button\">${btnName}</button>`
    $(".select-button-body").append(btnApnd);
  }
}

</script>

<style>
p.sc-message--text-content {
  margin: 5px 0px;
  font-family: Roboto, sans-serif;
  white-space : break-spaces;
}
html, body {
  background: #efefef;      
  height:100%;  
}
#center-text {          
  display: flex;
  flex: 1;
  flex-direction:column; 
  justify-content: center;
  align-items: center;  
  height:100%;
  
}
#chat-circle {
  position: fixed;
  bottom: 5.8%;
  right: 93.4%;
  z-index:10;
  background: white;
  width: 80px;
  height: 80px;  
  border-radius: 50%;
  color: white;
  padding: 28px;
  cursor: pointer;
  box-shadow: 0px 3px 16px 0px rgba(0, 0, 0, 0.6), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.btn#my-btn {
     background: white;
    padding-top: 13px;
    padding-bottom: 12px;
    border-radius: 45px;
    padding-right: 40px;
    padding-left: 40px;
    color: #5865C3;
}
#chat-overlay {
    background: rgba(255,255,255,0.1);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: none;
}

.splitter {
  flex: 0 0 auto;
  width: 18px;  
  background: url(https://raw.githubusercontent.com/RickStrahl/jquery-resizable/master/assets/vsizegrip.png) center center no-repeat #535353;
  min-height: 200px;
  cursor: col-resize;  
}

.chat-box {
  display:none;
  background: #efefef;
  position:fixed;
  left:30px;
  z-index:10;
  bottom:50px;  
  width:350px;
  max-width: 85vw;
  max-height:100vh;
  border-radius:5px;  
/*   box-shadow: 0px 5px 35px 9px #464a92; */
  box-shadow: 0px 5px 35px 9px #ccc;
  resize:both;
  /* height : 100%;
  width : 100%; */
}
.chat-box-toggle {
  float:right;
  margin-right:15px;
  cursor:pointer;
}
.chat-box-header {
  background: #00010a;
  height:70px;
  border-top-left-radius:5px;
  border-top-right-radius:5px; 
  color:white;
  text-align:center;
  font-size:20px;
  padding-top:17px;
}
.chat-box-body {
  position: relative;  
  height:370px;  
  height:89%;
  border:1px solid #ccc;  
  overflow: hidden;
}
.chat-box-body:after {
  content: "";
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAgOCkiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIgY3g9IjE3NiIgY3k9IjEyIiByPSI0Ii8+PHBhdGggZD0iTTIwLjUuNWwyMyAxMW0tMjkgODRsLTMuNzkgMTAuMzc3TTI3LjAzNyAxMzEuNGw1Ljg5OCAyLjIwMy0zLjQ2IDUuOTQ3IDYuMDcyIDIuMzkyLTMuOTMzIDUuNzU4bTEyOC43MzMgMzUuMzdsLjY5My05LjMxNiAxMC4yOTIuMDUyLjQxNi05LjIyMiA5LjI3NC4zMzJNLjUgNDguNXM2LjEzMSA2LjQxMyA2Ljg0NyAxNC44MDVjLjcxNSA4LjM5My0yLjUyIDE0LjgwNi0yLjUyIDE0LjgwNk0xMjQuNTU1IDkwcy03LjQ0NCAwLTEzLjY3IDYuMTkyYy02LjIyNyA2LjE5Mi00LjgzOCAxMi4wMTItNC44MzggMTIuMDEybTIuMjQgNjguNjI2cy00LjAyNi05LjAyNS0xOC4xNDUtOS4wMjUtMTguMTQ1IDUuNy0xOC4xNDUgNS43IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTg1LjcxNiAzNi4xNDZsNS4yNDMtOS41MjFoMTEuMDkzbDUuNDE2IDkuNTIxLTUuNDEgOS4xODVIOTAuOTUzbC01LjIzNy05LjE4NXptNjMuOTA5IDE1LjQ3OWgxMC43NXYxMC43NWgtMTAuNzV6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIvPjxjaXJjbGUgZmlsbD0iIzAwMCIgY3g9IjcxLjUiIGN5PSI3LjUiIHI9IjEuNSIvPjxjaXJjbGUgZmlsbD0iIzAwMCIgY3g9IjE3MC41IiBjeT0iOTUuNSIgcj0iMS41Ii8+PGNpcmNsZSBmaWxsPSIjMDAwIiBjeD0iODEuNSIgY3k9IjEzNC41IiByPSIxLjUiLz48Y2lyY2xlIGZpbGw9IiMwMDAiIGN4PSIxMy41IiBjeT0iMjMuNSIgcj0iMS41Ii8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTkzIDcxaDN2M2gtM3ptMzMgODRoM3YzaC0zem0tODUgMThoM3YzaC0zeiIvPjxwYXRoIGQ9Ik0zOS4zODQgNTEuMTIybDUuNzU4LTQuNDU0IDYuNDUzIDQuMjA1LTIuMjk0IDcuMzYzaC03Ljc5bC0yLjEyNy03LjExNHpNMTMwLjE5NSA0LjAzbDEzLjgzIDUuMDYyLTEwLjA5IDcuMDQ4LTMuNzQtMTIuMTF6bS04MyA5NWwxNC44MyA1LjQyOS0xMC44MiA3LjU1Ny00LjAxLTEyLjk4N3pNNS4yMTMgMTYxLjQ5NWwxMS4zMjggMjAuODk3TDIuMjY1IDE4MGwyLjk0OC0xOC41MDV6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iMS4yNSIvPjxwYXRoIGQ9Ik0xNDkuMDUgMTI3LjQ2OHMtLjUxIDIuMTgzLjk5NSAzLjM2NmMxLjU2IDEuMjI2IDguNjQyLTEuODk1IDMuOTY3LTcuNzg1LTIuMzY3LTIuNDc3LTYuNS0zLjIyNi05LjMzIDAtNS4yMDggNS45MzYgMCAxNy41MSAxMS42MSAxMy43MyAxMi40NTgtNi4yNTcgNS42MzMtMjEuNjU2LTUuMDczLTIyLjY1NC02LjYwMi0uNjA2LTE0LjA0MyAxLjc1Ni0xNi4xNTcgMTAuMjY4LTEuNzE4IDYuOTIgMS41ODQgMTcuMzg3IDEyLjQ1IDIwLjQ3NiAxMC44NjYgMy4wOSAxOS4zMzEtNC4zMSAxOS4zMzEtNC4zMSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvZz48L3N2Zz4=');
  opacity: 0.1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height:100%;
  position: absolute;
  z-index: -1;   
}

.select-button-body {
  position: relative;  
  height:45px;
  width : 100%;
  border:1px solid #ccc;  
  overflow: hidden;
}

.select-button-body::after{
  content: "";
  background-color: #9ebedc;
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height:100%;
  position: absolute;
  z-index: -1; 
}
#chat-input {
  background: #f4f7f9;
  width:100%; 
  position:relative;
  height:47px;  
  padding-top:10px;
  padding-right:50px;
  padding-bottom:10px;
  padding-left:15px;
  border:none;
  resize:none;
  outline:none;
  border:1px solid #ccc;
  color:#888;
  border-top:none;
  border-bottom-right-radius:5px;
  border-bottom-left-radius:5px;
  overflow:hidden;  
}
.chat-input > form {
    margin-bottom: 0;
}
#chat-input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #ccc;
}
#chat-input::-moz-placeholder { /* Firefox 19+ */
  color: #ccc;
}
#chat-input:-ms-input-placeholder { /* IE 10+ */
  color: #ccc;
}
#chat-input:-moz-placeholder { /* Firefox 18- */
  color: #ccc;
}
.chat-submit {  
  position:absolute;
  bottom:3px;
  right:10px;
  background: transparent;
  box-shadow:none;
  border:none;
  border-radius:50%;
  color:#5A5EB9;
  width:35px;
  height:35px;  
}
.chat-logs {
  padding:15px;
  height:370px; 
  overflow-y:scroll;
}

.chat-logs::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
}

.chat-logs::-webkit-scrollbar
{
	width: 5px;  
	background-color: #F5F5F5;
}

.chat-logs::-webkit-scrollbar-thumb
{
	background-color: #030652;
}

.chat-msg.user > .msg-avatar img {
  width:45px;
  height:45px;
  border-radius:50%;
  float:left;
}
.chat-msg.self > .msg-avatar img {
  width:45px;
  height:45px;
  border-radius:50%;
  float:right;
}
.cm-msg-text {
  background:white;
  padding:10px 15px 10px 15px;  
  color:#666;
  max-width:75%;
  float:left;
  margin-left:10px;
  margin-top: 10px;
  position:relative;
  margin-bottom:3px;
  border-radius:30px;
  word-break: break-all;
  white-space : break-spaces;
}
.cm-select-button {
  background:rgb(20, 20, 20);
  padding:10px 15px 10px 15px;  
  color:rgb(252, 247, 247);
  max-width:75%;
  float:left;
  margin-left:10px; 
  position:relative;
  margin-bottom:20px;
  margin-top:4px;
  border-radius:30px;
  word-break: break-all;
  white-space : break-spaces;
}

.cm-fallback{
  margin-left : 50px;
  display: block;
}

.cm-fallback-button {
  background: white;
  padding:5px 10px 5px 10px;  
  color:rgb(252, 247, 247);
  max-width:75%;
  float:center;
  margin-left:10px; 
  position:relative;
  margin-bottom:20px;
  margin-top:4px;
  border-radius:30px;
  word-break: break-all;
  white-space : break-spaces;
  font-weight: bold;
}

.chat-msg {
  clear:both;    
}
.chat-msg.self > .cm-msg-text {  
  float:right;
  margin-right:10px;
  background: #5A5EB9;
  color:white;
}
.cm-msg-button>ul>li {
  list-style:none;
  float:left;
  width:50%;
}
.cm-msg-button {
    clear: both;
    margin-bottom: 70px;
}

@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v78/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}

</style>
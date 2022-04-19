$(function()
{var playerTrack=$(".player-track");var albumName=$('.album-name');var trackName=$('.track-name');var albumArt=$('.album-art'),sArea=$('.s-area'),seekBar=$('.seek-bar'),trackTime=$('.track-time'),insTime=$('.ins-time'),sHover=$('.s-hover'),playPauseButton=$(".play-pause-button"),vol=$('.volume input'),j=playPauseButton.find('i'),i=$(".fl-play-pause").find('i'),tProgress=$('.current-time'),tTime=$('.track-length'),seekT,seekLoc,seekBarPos,cM,ctMinutes,ctSeconds,curMinutes,curSeconds,durMinutes,durSeconds,playProgress,bTime,nTime=0,buffInterval=null,tFlag=false;var playPreviousTrackButton=$('.play-previous'),playNextTrackButton=$('.play-next'),currIndex=-1;var songs=[{artist:" ",name:"My Favorite Jhon Sina hits",url:"file-mp3/qcast-music.mp3",picture:""},{artist:" ",name:"My Favorite Jhon Sina hits",url:"file-mp3/qcast-music2.mp3",picture:" "},{artist:" ",name:"My Favorite Jhon Sina hits",url:"file-mp3/qcast-music3.mp3",picture:""}];function shuffle(a){var j,x,i;for(i=a.length-1;i>0;i--){j=Math.floor(Math.random()*(i+1));x=a[i];a[i]=a[j];a[j]=x;}
return a;}
songs=shuffle(songs);function showHover(event)
{seekBarPos=sArea.offset();seekT=event.clientX-seekBarPos.left;seekLoc=audio.duration*(seekT/sArea.outerWidth());sHover.width(seekT);cM=seekLoc/60;ctMinutes=Math.floor(cM);ctSeconds=Math.floor(seekLoc-ctMinutes*60);if((ctMinutes<0)||(ctSeconds<0))
return;if((ctMinutes<0)||(ctSeconds<0))
return;if(ctMinutes<10)
ctMinutes='0'+ctMinutes;if(ctSeconds<10)
ctSeconds='0'+ctSeconds;if(isNaN(ctMinutes)||isNaN(ctSeconds))
insTime.text('--:--');else
insTime.text(ctMinutes+':'+ctSeconds);insTime.css({'left':seekT,'margin-left':'-21px'}).fadeIn(0);}
function hideHover()
{sHover.width(0);insTime.text('00:00').css({'left':'0px','margin-left':'0px'}).fadeOut(0);}
function playFromClickedPos()
{audio.currentTime=seekLoc;seekBar.width(seekT);hideHover();}
function updateCurrTime()
{nTime=new Date();nTime=nTime.getTime();if(!tFlag)
{tFlag=true;trackTime.addClass('active');}
curMinutes=Math.floor(audio.currentTime/60);curSeconds=Math.floor(audio.currentTime-curMinutes*60);durMinutes=Math.floor(audio.duration/60);durSeconds=Math.floor(audio.duration-durMinutes*60);playProgress=(audio.currentTime/audio.duration)*100;if(curMinutes<10)
curMinutes='0'+curMinutes;if(curSeconds<10)
curSeconds='0'+curSeconds;if(durMinutes<10)
durMinutes='0'+durMinutes;if(durSeconds<10)
durSeconds='0'+durSeconds;if(isNaN(curMinutes)||isNaN(curSeconds))
tProgress.text('00:00');else
tProgress.text(curMinutes+':'+curSeconds);if(isNaN(durMinutes)||isNaN(durSeconds))
tTime.text('00:00');else
tTime.text(durMinutes+':'+durSeconds);if(isNaN(curMinutes)||isNaN(curSeconds)||isNaN(durMinutes)||isNaN(durSeconds))
trackTime.removeClass('active');else
trackTime.addClass('active');seekBar.width(playProgress+'%');if(playProgress==100)
{i.attr('class','fa fa-play');seekBar.width(0);tProgress.text('00:00');albumArt.removeClass('buffering').removeClass('active');clearInterval(buffInterval);selectTrack(1);}}
function checkBuffering()
{clearInterval(buffInterval);buffInterval=setInterval(function()
{if((nTime==0)||(bTime-nTime)>1000)
albumArt.addClass('buffering');else
albumArt.removeClass('buffering');bTime=new Date();bTime=bTime.getTime();},100);}
function selectTrack(flag)
{if(flag==0||flag==1)
++currIndex;else
--currIndex;if((currIndex>-1)&&(currIndex<songs.length))
{if(flag==0){i.attr('class','fa fa-play');$('.music-player').removeClass('show');event.preventDefault();}
else
{albumArt.removeClass('buffering');i.attr('class','fa fa-pause');$('.music-player').addClass('show');event.preventDefault();}
seekBar.width(0);trackTime.removeClass('active');tProgress.text('00:00');tTime.text('00:00');currAlbum=songs[currIndex].name;currTrackName=songs[currIndex].artist;currArtwork=songs[currIndex].picture;audio.src=songs[currIndex].url;nTime=0;bTime=new Date();bTime=bTime.getTime();if(flag!=0)
{audio.play();playerTrack.addClass('active');albumArt.addClass('active');clearInterval(buffInterval);checkBuffering();}
albumName.text(currAlbum);trackName.text(currTrackName);}
else
{if(flag==0||flag==1)
--currIndex;else
++currIndex;}}
function initPlayer()
{audio=new Audio();audio.volume=vol.val()/100;selectTrack(0);audio.loop=false;playPauseButton.on('click',function(){if(audio.paused)
{playerTrack.addClass('active');albumArt.addClass('active');checkBuffering();$(this).find("i").attr('class','fas fa-pause');i.attr('class','fas fa-pause');audio.play();$('.music-player').addClass('show');event.preventDefault();}
else
{playerTrack.removeClass('active');albumArt.removeClass('active');clearInterval(buffInterval);albumArt.removeClass('buffering');i.attr('class','fas fa-play');j.attr('class','fas fa-play');audio.pause();$('.music-player').removeClass('show');event.preventDefault();}});vol.change(function(e){audio.volume=($('.volume input').val())/100;});sArea.mousemove(function(event){showHover(event);});sArea.mouseout(hideHover);sArea.on('click',playFromClickedPos);$(audio).on('timeupdate',updateCurrTime);playPreviousTrackButton.on('click',function(){selectTrack(-1);});playNextTrackButton.on('click',function(){selectTrack(1);});}
initPlayer();});const rangeInputs=document.querySelectorAll('input[type="range"]')
function handleInputChange(e){let target=e.target
if(e.target.type!=='range'){target=document.getElementById('range')}
const min=target.min
const max=target.max
const val=target.value
target.style.backgroundSize=(val-min)*100/(max-min)+'% 100%'}
rangeInputs.forEach(input=>{input.addEventListener('input',handleInputChange)})
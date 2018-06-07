function initMap(){if(0!=$("#map").size()){var a={lat:20,lng:30},b=2;$("#map").width()<640&&(b=1),map=new google.maps.Map(document.getElementById("map"),{center:a,zoom:b,scrollwheel:!1,disableDefaultUI:!0,styles:[{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]}]});var c={},d={};for(var e in citymap)c[e]={path:google.maps.SymbolPath.CIRCLE,scale:6,fillOpacity:1,fillColor:"#fff",strokeColor:"#E31E24",strokeWeight:4,labelOrigin:new google.maps.Point(citymap[e].label_shiftX,citymap[e].label_shiftY)},d[e]=new google.maps.Marker({position:citymap[e].center,icon:c[e],map:map,city:e,label:{text:citymap[e].name,fontSize:"1rem",color:"#fff"}}),d[e].addListener("click",function(){for(var a in d){var b=d[a].getLabel();b.color="#fff",d[a].setLabel(b),c[a].labelOrigin.x=citymap[a].label_shiftX,c[a].labelOrigin.y=citymap[a].label_shiftY,d[a].setIcon(c[a])}show_map_card(this.city);var e=this.getIcon();e.scale=10,e.strokeWeight=6,e.labelOrigin.x=.6*citymap[this.city].label_shiftX,e.labelOrigin.y=.6*citymap[this.city].label_shiftY,this.set("icon",e);var f=this.getLabel();f.color="#E31E24",this.setLabel(f)});google.maps.event.trigger(d.Belarus,"click")}}function show_map_card(a){$(".map .card").fadeOut(),$(".map").find(".card_"+a).fadeIn()}var map,citymap={};$(function(){$(document).on("click",".card .close",function(){$(this).parents(".card").fadeOut()})});

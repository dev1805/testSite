(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"children":["this.MainViewer"],"backgroundColor":["#FFFFFF"],"id":"rootPlayer","start":"this.init()","data":{"locales":{"en":"locale/en.txt"},"defaultLocale":"en","textToSpeechConfig":{"volume":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"stopBackgroundAudio":false,"speechOnQuizQuestion":false,"rate":1,"pitch":1},"history":{},"name":"Player463"},"propagateClick":false,"hash": "91196b0eee2dd8ea6327e62e533ee7ad8a3e6073c270429df755a58b8108d6cb", "definitions": [{"class":"Panorama","id":"panorama_82C8384B_886E_F611_41BD_E28318949811","frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"colCount":6,"url":"media/panorama_82C8384B_886E_F611_41BD_E28318949811_0/{face}/0/{row}_{column}.jpg","rowCount":1,"width":3072}]},"thumbnailUrl":"media/panorama_82C8384B_886E_F611_41BD_E28318949811_t.jpg"}],"label":trans('panorama_82C8384B_886E_F611_41BD_E28318949811.label'),"thumbnailUrl":"media/panorama_82C8384B_886E_F611_41BD_E28318949811_t.jpg","hfovMax":130,"vfov":180,"data":{"label":"full-seamless-panorama-degrees-angle-view-interior-fabric-salon-prestige-modern-car-equirectangular-equidistant-spherical-140485100"},"hfov":360,"hfovMin":"150%"},{"class":"PanoramaPlayer","id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","aaEnabled":true,"arrowKeysAction":"translate","touchControlMode":"drag_rotation"},{"id":"MainViewer","playbackBarHeadShadowOpacity":0.7,"playbackBarHeight":10,"data":{"name":"Main Viewer"},"progressBackgroundColorRatios":[0],"subtitlesFontColor":"#FFFFFF","progressRight":"33%","minHeight":50,"firstTransitionDuration":0,"minWidth":100,"playbackBarHeadBorderSize":0,"progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"progressOpacity":0.7,"progressBarBorderColor":"#000000","playbackBarBottom":5,"playbackBarHeadShadow":true,"subtitlesBottom":50,"playbackBarRight":0,"toolTipShadowColor":"#333138","toolTipTextShadowColor":"#000000","width":"100%","playbackBarProgressBackgroundColorRatios":[0],"progressBarBackgroundColor":["#3399FF"],"playbackBarHeadShadowBlurRadius":3,"toolTipFontFamily":"Arial","progressBorderColor":"#000000","subtitlesTop":0,"progressBackgroundColor":["#000000"],"subtitlesTextShadowColor":"#000000","subtitlesFontSize":"3vmin","progressBottom":10,"progressHeight":2,"surfaceReticleColor":"#FFFFFF","toolTipPaddingTop":4,"progressBorderSize":0,"playbackBarHeadBorderColor":"#000000","progressBarBorderRadius":2,"playbackBarBackgroundOpacity":1,"playbackBarBorderColor":"#FFFFFF","height":"100%","vrPointerSelectionColor":"#FF6600","playbackBarProgressBorderRadius":0,"toolTipBackgroundColor":"#F6F6F6","progressBarBorderSize":0,"playbackBarHeadWidth":6,"subtitlesBackgroundOpacity":0.2,"subtitlesBorderColor":"#FFFFFF","playbackBarLeft":0,"propagateClick":false,"progressBorderRadius":2,"playbackBarHeadHeight":15,"vrPointerSelectionTime":2000,"playbackBarBorderRadius":0,"playbackBarProgressBorderSize":0,"progressLeft":"33%","subtitlesTextShadowVerticalLength":1,"subtitlesFontFamily":"Arial","toolTipPaddingLeft":6,"playbackBarHeadShadowColor":"#000000","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarProgressBorderColor":"#000000","class":"ViewerArea","playbackBarBackgroundColorDirection":"vertical","subtitlesGap":0,"subtitlesBackgroundColor":"#000000","playbackBarBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"toolTipBorderColor":"#767676","playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesTextShadowOpacity":1,"toolTipFontColor":"#606060","subtitlesTextShadowHorizontalLength":1,"toolTipPaddingBottom":4,"toolTipFontSize":"1.11vmin","playbackBarHeadBackgroundColorRatios":[0,1],"toolTipPaddingRight":6,"playbackBarHeadBorderRadius":0,"vrPointerColor":"#FFFFFF"},{"class":"PlayList","id":"mainPlayList","items":[{"class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","camera":"this.panorama_82C8384B_886E_F611_41BD_E28318949811_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_82C8384B_886E_F611_41BD_E28318949811"}]},{"class":"PanoramaCamera","id":"panorama_82C8384B_886E_F611_41BD_E28318949811_camera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"enterPointingToHorizon":true,"initialSequence":"this.sequence_82C57B91_886E_EA0E_41D7_8B48E20D6892"},{"class":"PanoramaCameraSequence","id":"sequence_82C57B91_886E_EA0E_41D7_8B48E20D6892","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}]}],"backgroundColorRatios":[0],"minHeight":0,"minWidth":0,"layout":"absolute","class":"Player","gap":10,"width":"100%","scrollBarColor":"#000000","height":"100%","scripts":{"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"isPanorama":TDV.Tour.Script.isPanorama,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setMapLocation":TDV.Tour.Script.setMapLocation,"initQuiz":TDV.Tour.Script.initQuiz,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"textToSpeech":TDV.Tour.Script.textToSpeech,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"initAnalytics":TDV.Tour.Script.initAnalytics,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"startMeasurement":TDV.Tour.Script.startMeasurement,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"historyGoBack":TDV.Tour.Script.historyGoBack,"init":TDV.Tour.Script.init,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"historyGoForward":TDV.Tour.Script.historyGoForward,"getMainViewer":TDV.Tour.Script.getMainViewer,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"cloneBindings":TDV.Tour.Script.cloneBindings,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"showWindow":TDV.Tour.Script.showWindow,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getKey":TDV.Tour.Script.getKey,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"translate":TDV.Tour.Script.translate,"setLocale":TDV.Tour.Script.setLocale,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"resumePlayers":TDV.Tour.Script.resumePlayers,"setValue":TDV.Tour.Script.setValue,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"showPopupImage":TDV.Tour.Script.showPopupImage,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"quizShowScore":TDV.Tour.Script.quizShowScore,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"clone":TDV.Tour.Script.clone,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"downloadFile":TDV.Tour.Script.downloadFile,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"shareSocial":TDV.Tour.Script.shareSocial,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"executeJS":TDV.Tour.Script.executeJS,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getComponentByName":TDV.Tour.Script.getComponentByName,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"quizStart":TDV.Tour.Script.quizStart,"getOverlays":TDV.Tour.Script.getOverlays,"mixObject":TDV.Tour.Script.mixObject,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"existsKey":TDV.Tour.Script.existsKey,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"unregisterKey":TDV.Tour.Script.unregisterKey,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"playAudioList":TDV.Tour.Script.playAudioList,"registerKey":TDV.Tour.Script.registerKey,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"quizFinish":TDV.Tour.Script.quizFinish,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"openLink":TDV.Tour.Script.openLink,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getMediaByName":TDV.Tour.Script.getMediaByName,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"createTween":TDV.Tour.Script.createTween,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getPixels":TDV.Tour.Script.getPixels,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList},"scrollBarMargin":2,"defaultMenu":["fullscreen","mute","rotation"]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.0.11.js.map
})();
//Generated with v2023.0.11, Sun Jun 4 2023
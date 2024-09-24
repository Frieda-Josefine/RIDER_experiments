/*************** 
 * Rider3 Test *
 ***************/


// store info about the experiment session:
let expName = 'RIDER3';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'

function makeArr(startValue, stopValue, cardinality) {
  var arr = [];
  var step = (stopValue - startValue) / (cardinality - 1);
  for (var i = 0; i < cardinality; i++) {
    arr.push(startValue + (step * i));
  }
  return arr;
}
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1, 1, 1]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(StartRoutineBegin());
flowScheduler.add(StartRoutineEachFrame());
flowScheduler.add(StartRoutineEnd());
const instrLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(instrLoopLoopBegin(instrLoopLoopScheduler));
flowScheduler.add(instrLoopLoopScheduler);
flowScheduler.add(instrLoopLoopEnd);
flowScheduler.add(adjustOr_instruRoutineBegin());
flowScheduler.add(adjustOr_instruRoutineEachFrame());
flowScheduler.add(adjustOr_instruRoutineEnd());
flowScheduler.add(start_practiceRoutineBegin());
flowScheduler.add(start_practiceRoutineEachFrame());
flowScheduler.add(start_practiceRoutineEnd());
const training_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(training_loopLoopBegin(training_loopLoopScheduler));
flowScheduler.add(training_loopLoopScheduler);
flowScheduler.add(training_loopLoopEnd);
flowScheduler.add(testing_startRoutineBegin());
flowScheduler.add(testing_startRoutineEachFrame());
flowScheduler.add(testing_startRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(start_distractionRoutineBegin());
flowScheduler.add(start_distractionRoutineEachFrame());
flowScheduler.add(start_distractionRoutineEnd());
const disTrialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(disTrialsLoopBegin(disTrialsLoopScheduler));
flowScheduler.add(disTrialsLoopScheduler);
flowScheduler.add(disTrialsLoopEnd);
flowScheduler.add(start_LTMRoutineBegin());
flowScheduler.add(start_LTMRoutineEachFrame());
flowScheduler.add(start_LTMRoutineEnd());
const LTMtrialLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(LTMtrialLoopBegin(LTMtrialLoopScheduler));
flowScheduler.add(LTMtrialLoopScheduler);
flowScheduler.add(LTMtrialLoopEnd);
const BonusLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(BonusLoopLoopBegin(BonusLoopLoopScheduler));
flowScheduler.add(BonusLoopLoopScheduler);
flowScheduler.add(BonusLoopLoopEnd);
flowScheduler.add(feedback_expRoutineBegin());
flowScheduler.add(feedback_expRoutineEachFrame());
flowScheduler.add(feedback_expRoutineEnd());
flowScheduler.add(theEndRoutineBegin());
flowScheduler.add(theEndRoutineEachFrame());
flowScheduler.add(theEndRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'conditions/conditions_ltm_128.xlsx', 'path': 'conditions/conditions_ltm_128.xlsx'},
    {'name': 'stimuli/watercooler.png', 'path': 'stimuli/watercooler.png'},
    {'name': 'stimuli/scissors02a.png', 'path': 'stimuli/scissors02a.png'},
    {'name': 'conditions/conditions_ltm_99.xlsx', 'path': 'conditions/conditions_ltm_99.xlsx'},
    {'name': 'stimuli/bicycle.png', 'path': 'stimuli/bicycle.png'},
    {'name': 'conditions/conditions_134.xlsx', 'path': 'conditions/conditions_134.xlsx'},
    {'name': 'stimuli/globe.png', 'path': 'stimuli/globe.png'},
    {'name': 'stimuli/bluejay.png', 'path': 'stimuli/bluejay.png'},
    {'name': 'stimuli/duck01.png', 'path': 'stimuli/duck01.png'},
    {'name': 'conditions/conditions_ltm_142.xlsx', 'path': 'conditions/conditions_ltm_142.xlsx'},
    {'name': 'conditions/conditions_89.xlsx', 'path': 'conditions/conditions_89.xlsx'},
    {'name': 'stimuli/fireextinguisher02.png', 'path': 'stimuli/fireextinguisher02.png'},
    {'name': 'stimuli/handfan01b.png', 'path': 'stimuli/handfan01b.png'},
    {'name': 'conditions/conditions_120.xlsx', 'path': 'conditions/conditions_120.xlsx'},
    {'name': 'stimuli/motorcycle.png', 'path': 'stimuli/motorcycle.png'},
    {'name': 'stimuli/pintofbeer.png', 'path': 'stimuli/pintofbeer.png'},
    {'name': 'stim/keys copy.png', 'path': 'stim/keys copy.png'},
    {'name': 'conditions/conditions_ltm_121.xlsx', 'path': 'conditions/conditions_ltm_121.xlsx'},
    {'name': 'stimuli/travelmug.png', 'path': 'stimuli/travelmug.png'},
    {'name': 'stimuli/badmintonracket.png', 'path': 'stimuli/badmintonracket.png'},
    {'name': 'stim/white.png', 'path': 'stim/white.png'},
    {'name': 'conditions/conditions_136.xlsx', 'path': 'conditions/conditions_136.xlsx'},
    {'name': 'conditions/conditions_ltm_141.xlsx', 'path': 'conditions/conditions_ltm_141.xlsx'},
    {'name': 'conditions/conditions_124.xlsx', 'path': 'conditions/conditions_124.xlsx'},
    {'name': 'conditions/conditions_87.xlsx', 'path': 'conditions/conditions_87.xlsx'},
    {'name': 'conditions/conditions_126.xlsx', 'path': 'conditions/conditions_126.xlsx'},
    {'name': 'stimuli/nyala.png', 'path': 'stimuli/nyala.png'},
    {'name': 'stimuli/dromedary.png', 'path': 'stimuli/dromedary.png'},
    {'name': 'stimuli/nail.png', 'path': 'stimuli/nail.png'},
    {'name': 'stimuli/windshieldwasherfluid.png', 'path': 'stimuli/windshieldwasherfluid.png'},
    {'name': 'stimuli/radio03a.png', 'path': 'stimuli/radio03a.png'},
    {'name': 'conditions/conditions_ltm_122.xlsx', 'path': 'conditions/conditions_ltm_122.xlsx'},
    {'name': 'stimuli/microscope.png', 'path': 'stimuli/microscope.png'},
    {'name': 'stimuli/greywolf.png', 'path': 'stimuli/greywolf.png'},
    {'name': 'stim/eiffeltower.png', 'path': 'stim/eiffeltower.png'},
    {'name': 'conditions/conditions_ltm_140.xlsx', 'path': 'conditions/conditions_ltm_140.xlsx'},
    {'name': 'stimuli/mailbox02.png', 'path': 'stimuli/mailbox02.png'},
    {'name': 'stimuli/maraca02a.png', 'path': 'stimuli/maraca02a.png'},
    {'name': 'stim/arrows.png', 'path': 'stim/arrows.png'},
    {'name': 'conditions/conditions_133.xlsx', 'path': 'conditions/conditions_133.xlsx'},
    {'name': 'stim/keys.png', 'path': 'stim/keys.png'},
    {'name': 'stimuli/aloe01.png', 'path': 'stimuli/aloe01.png'},
    {'name': 'stimuli/parrot01.png', 'path': 'stimuli/parrot01.png'},
    {'name': 'stim/crown.png', 'path': 'stim/crown.png'},
    {'name': 'stimuli/greatwhiteshark.png', 'path': 'stimuli/greatwhiteshark.png'},
    {'name': 'stimuli/officechair02.png', 'path': 'stimuli/officechair02.png'},
    {'name': 'stimuli/paintroller02.png', 'path': 'stimuli/paintroller02.png'},
    {'name': 'conditions/conditions_ltm_125.xlsx', 'path': 'conditions/conditions_ltm_125.xlsx'},
    {'name': 'stimuli/dragonfly01.png', 'path': 'stimuli/dragonfly01.png'},
    {'name': 'conditions/conditions_ltm_130.xlsx', 'path': 'conditions/conditions_ltm_130.xlsx'},
    {'name': 'stimuli/apron.png', 'path': 'stimuli/apron.png'},
    {'name': 'stimuli/pear01.png', 'path': 'stimuli/pear01.png'},
    {'name': 'stimuli/thumbtack02b.png', 'path': 'stimuli/thumbtack02b.png'},
    {'name': 'stimuli/monument.png', 'path': 'stimuli/monument.png'},
    {'name': 'stim/keys_right.png', 'path': 'stim/keys_right.png'},
    {'name': 'stim/dishsoap.png', 'path': 'stim/dishsoap.png'},
    {'name': 'conditions/conditions_128.xlsx', 'path': 'conditions/conditions_128.xlsx'},
    {'name': 'conditions/distractorTask.xlsx', 'path': 'conditions/distractorTask.xlsx'},
    {'name': 'stimuli/honeybee.png', 'path': 'stimuli/honeybee.png'},
    {'name': 'conditions/conditions_121.xlsx', 'path': 'conditions/conditions_121.xlsx'},
    {'name': 'stimuli/bassethound.png', 'path': 'stimuli/bassethound.png'},
    {'name': 'stimuli/candelabra.png', 'path': 'stimuli/candelabra.png'},
    {'name': 'conditions/instrcutions/instru_2.png', 'path': 'conditions/instrcutions/instru_2.png'},
    {'name': 'stimuli/rhinoceros02.png', 'path': 'stimuli/rhinoceros02.png'},
    {'name': 'stimuli/rollerblade.png', 'path': 'stimuli/rollerblade.png'},
    {'name': 'stimuli/loppingshears.png', 'path': 'stimuli/loppingshears.png'},
    {'name': 'conditions/conditions_ltm_134.xlsx', 'path': 'conditions/conditions_ltm_134.xlsx'},
    {'name': 'stimuli/backpack01a.png', 'path': 'stimuli/backpack01a.png'},
    {'name': 'conditions/instrcutions/instru_1.png', 'path': 'conditions/instrcutions/instru_1.png'},
    {'name': 'stimuli/tabascosauce.png', 'path': 'stimuli/tabascosauce.png'},
    {'name': 'conditions/conditions_140.xlsx', 'path': 'conditions/conditions_140.xlsx'},
    {'name': 'conditions/conditions_ltm_135.xlsx', 'path': 'conditions/conditions_ltm_135.xlsx'},
    {'name': 'stimuli/gorilla.png', 'path': 'stimuli/gorilla.png'},
    {'name': 'stimuli/stackingring01b.png', 'path': 'stimuli/stackingring01b.png'},
    {'name': 'conditions/conditions_96.xlsx', 'path': 'conditions/conditions_96.xlsx'},
    {'name': 'conditions/instrcutions/instru_10.png', 'path': 'conditions/instrcutions/instru_10.png'},
    {'name': 'conditions/conditions_ltm_120.xlsx', 'path': 'conditions/conditions_ltm_120.xlsx'},
    {'name': 'stimuli/penguin.png', 'path': 'stimuli/penguin.png'},
    {'name': 'conditions/conditions_ltm_126.xlsx', 'path': 'conditions/conditions_ltm_126.xlsx'},
    {'name': 'stim/toynutcracker.png', 'path': 'stim/toynutcracker.png'},
    {'name': 'conditions/conditions_ltm_132.xlsx', 'path': 'conditions/conditions_ltm_132.xlsx'},
    {'name': 'conditions/conditions_ltm_98.xlsx', 'path': 'conditions/conditions_ltm_98.xlsx'},
    {'name': 'stimuli/lock02a.png', 'path': 'stimuli/lock02a.png'},
    {'name': 'stimuli/sailboat.png', 'path': 'stimuli/sailboat.png'},
    {'name': 'conditions/conditions_ltm_143.xlsx', 'path': 'conditions/conditions_ltm_143.xlsx'},
    {'name': 'conditions/conditions_123.xlsx', 'path': 'conditions/conditions_123.xlsx'},
    {'name': 'stimuli/photocopier.png', 'path': 'stimuli/photocopier.png'},
    {'name': 'conditions/conditions_ltm_124.xlsx', 'path': 'conditions/conditions_ltm_124.xlsx'},
    {'name': 'conditions/training.xlsx', 'path': 'conditions/training.xlsx'},
    {'name': 'conditions/conditions_99.xlsx', 'path': 'conditions/conditions_99.xlsx'},
    {'name': 'stimuli/megaphone.png', 'path': 'stimuli/megaphone.png'},
    {'name': 'stimuli/quartz.png', 'path': 'stimuli/quartz.png'},
    {'name': 'conditions/conditions_ltm_96.xlsx', 'path': 'conditions/conditions_ltm_96.xlsx'},
    {'name': 'stimuli/outdoorheater.png', 'path': 'stimuli/outdoorheater.png'},
    {'name': 'conditions/conditions_125.xlsx', 'path': 'conditions/conditions_125.xlsx'},
    {'name': 'stim/leaf04.png', 'path': 'stim/leaf04.png'},
    {'name': 'stimuli/gardengnome01.png', 'path': 'stimuli/gardengnome01.png'},
    {'name': 'conditions/conditions_139.xlsx', 'path': 'conditions/conditions_139.xlsx'},
    {'name': 'conditions/conditions_ltm_139.xlsx', 'path': 'conditions/conditions_ltm_139.xlsx'},
    {'name': 'conditions/conditions_ltm_123.xlsx', 'path': 'conditions/conditions_ltm_123.xlsx'},
    {'name': 'stim/frenchfries.png', 'path': 'stim/frenchfries.png'},
    {'name': 'conditions/conditions_137.xlsx', 'path': 'conditions/conditions_137.xlsx'},
    {'name': 'stimuli/chipmunk.png', 'path': 'stimuli/chipmunk.png'},
    {'name': 'stimuli/chameleon.png', 'path': 'stimuli/chameleon.png'},
    {'name': 'stimuli/handbrush02.png', 'path': 'stimuli/handbrush02.png'},
    {'name': 'conditions/instrcutions/instru_9.png', 'path': 'conditions/instrcutions/instru_9.png'},
    {'name': 'conditions/conditions_ltm_137.xlsx', 'path': 'conditions/conditions_ltm_137.xlsx'},
    {'name': 'stimuli/soapdispenser03b.png', 'path': 'stimuli/soapdispenser03b.png'},
    {'name': 'stimuli/razor04a.png', 'path': 'stimuli/razor04a.png'},
    {'name': 'stimuli/wheelbarrow01.png', 'path': 'stimuli/wheelbarrow01.png'},
    {'name': 'conditions/instructions_1.xlsx', 'path': 'conditions/instructions_1.xlsx'},
    {'name': 'conditions/instrcutions/instru_7.png', 'path': 'conditions/instrcutions/instru_7.png'},
    {'name': 'conditions/attentionChecks.xlsx', 'path': 'conditions/attentionChecks.xlsx'},
    {'name': 'stimuli/cornet.png', 'path': 'stimuli/cornet.png'},
    {'name': 'conditions/conditions_138.xlsx', 'path': 'conditions/conditions_138.xlsx'},
    {'name': 'stimuli/corkscrew03a.png', 'path': 'stimuli/corkscrew03a.png'},
    {'name': 'stimuli/cat.png', 'path': 'stimuli/cat.png'},
    {'name': 'stimuli/hen.png', 'path': 'stimuli/hen.png'},
    {'name': 'conditions/conditions_ltm_127.xlsx', 'path': 'conditions/conditions_ltm_127.xlsx'},
    {'name': 'stimuli/jeep.png', 'path': 'stimuli/jeep.png'},
    {'name': 'stimuli/scrubbingbrush05a.png', 'path': 'stimuli/scrubbingbrush05a.png'},
    {'name': 'stimuli/flamingo.png', 'path': 'stimuli/flamingo.png'},
    {'name': 'stimuli/flipflop01a.png', 'path': 'stimuli/flipflop01a.png'},
    {'name': 'conditions/instrcutions/instru_6.png', 'path': 'conditions/instrcutions/instru_6.png'},
    {'name': 'stimuli/blender.png', 'path': 'stimuli/blender.png'},
    {'name': 'stim/repond_faster.png', 'path': 'stim/repond_faster.png'},
    {'name': 'conditions/conditions_130.xlsx', 'path': 'conditions/conditions_130.xlsx'},
    {'name': 'stimuli/africanelephant.png', 'path': 'stimuli/africanelephant.png'},
    {'name': 'stimuli/buoy.png', 'path': 'stimuli/buoy.png'},
    {'name': 'stim/bottleofredwine02.png', 'path': 'stim/bottleofredwine02.png'},
    {'name': 'stimuli/wateringcan.png', 'path': 'stimuli/wateringcan.png'},
    {'name': 'stim/pic_redirection_prolific.png', 'path': 'stim/pic_redirection_prolific.png'},
    {'name': 'conditions/conditions_ltm_133.xlsx', 'path': 'conditions/conditions_ltm_133.xlsx'},
    {'name': 'conditions/instrcutions/instru_5.png', 'path': 'conditions/instrcutions/instru_5.png'},
    {'name': 'stim/christmastree.png', 'path': 'stim/christmastree.png'},
    {'name': 'stim/floorlamp.png', 'path': 'stim/floorlamp.png'},
    {'name': 'stim/bowlingpin.png', 'path': 'stim/bowlingpin.png'},
    {'name': 'stimuli/armadillo.png', 'path': 'stimuli/armadillo.png'},
    {'name': 'conditions/instrcutions/instru_3.png', 'path': 'conditions/instrcutions/instru_3.png'},
    {'name': 'conditions/conditions_127.xlsx', 'path': 'conditions/conditions_127.xlsx'},
    {'name': 'conditions/conditions_ltm_87.xlsx', 'path': 'conditions/conditions_ltm_87.xlsx'},
    {'name': 'stimuli/redfox.png', 'path': 'stimuli/redfox.png'},
    {'name': 'stimuli/tree.png', 'path': 'stimuli/tree.png'},
    {'name': 'conditions/conditions_131.xlsx', 'path': 'conditions/conditions_131.xlsx'},
    {'name': 'conditions/conditions_135.xlsx', 'path': 'conditions/conditions_135.xlsx'},
    {'name': 'stimuli/fryingpan01.png', 'path': 'stimuli/fryingpan01.png'},
    {'name': 'stimuli/makeupbrush04.png', 'path': 'stimuli/makeupbrush04.png'},
    {'name': 'stimuli/barnowl.png', 'path': 'stimuli/barnowl.png'},
    {'name': 'conditions/instrcutions/instru_4.png', 'path': 'conditions/instrcutions/instru_4.png'},
    {'name': 'stim/respond_faster.png', 'path': 'stim/respond_faster.png'},
    {'name': 'stimuli/boxingglove01.png', 'path': 'stimuli/boxingglove01.png'},
    {'name': 'stimuli/lynx01.png', 'path': 'stimuli/lynx01.png'},
    {'name': 'stim/basketballhoop02.png', 'path': 'stim/basketballhoop02.png'},
    {'name': 'stim/parkbench03.png', 'path': 'stim/parkbench03.png'},
    {'name': 'conditions/correct_adjustment.xlsx', 'path': 'conditions/correct_adjustment.xlsx'},
    {'name': 'stimuli/barbecue02.png', 'path': 'stimuli/barbecue02.png'},
    {'name': 'stimuli/cellphone.png', 'path': 'stimuli/cellphone.png'},
    {'name': 'stimuli/desktopcomputer.png', 'path': 'stimuli/desktopcomputer.png'},
    {'name': 'stim/dreamcatcher.png', 'path': 'stim/dreamcatcher.png'},
    {'name': 'stimuli/adjustablewrench02a.png', 'path': 'stimuli/adjustablewrench02a.png'},
    {'name': 'stimuli/snowglobe.png', 'path': 'stimuli/snowglobe.png'},
    {'name': 'stimuli/white.png', 'path': 'stimuli/white.png'},
    {'name': 'stim/noparkingsign.png', 'path': 'stim/noparkingsign.png'},
    {'name': 'stim/left_arrow.png', 'path': 'stim/left_arrow.png'},
    {'name': 'conditions/conditions_132.xlsx', 'path': 'conditions/conditions_132.xlsx'},
    {'name': 'stimuli/bulldozer.png', 'path': 'stimuli/bulldozer.png'},
    {'name': 'stimuli/clownfish.png', 'path': 'stimuli/clownfish.png'},
    {'name': 'conditions/conditions_ltm_129.xlsx', 'path': 'conditions/conditions_ltm_129.xlsx'},
    {'name': 'stimuli/pylon01.png', 'path': 'stimuli/pylon01.png'},
    {'name': 'stimuli/zebra.png', 'path': 'stimuli/zebra.png'},
    {'name': 'stimuli/accordion02.png', 'path': 'stimuli/accordion02.png'},
    {'name': 'stimuli/antlers.png', 'path': 'stimuli/antlers.png'},
    {'name': 'stimuli/gecko.png', 'path': 'stimuli/gecko.png'},
    {'name': 'stimuli/acorn.png', 'path': 'stimuli/acorn.png'},
    {'name': 'stimuli/lightbulb01.png', 'path': 'stimuli/lightbulb01.png'},
    {'name': 'stimuli/shoppingcart.png', 'path': 'stimuli/shoppingcart.png'},
    {'name': 'conditions/conditions_ltm_136.xlsx', 'path': 'conditions/conditions_ltm_136.xlsx'},
    {'name': 'conditions/conditions_129.xlsx', 'path': 'conditions/conditions_129.xlsx'},
    {'name': 'stimuli/pumpkin.png', 'path': 'stimuli/pumpkin.png'},
    {'name': 'stimuli/witchhat.png', 'path': 'stimuli/witchhat.png'},
    {'name': 'stimuli/chessknight03b.png', 'path': 'stimuli/chessknight03b.png'},
    {'name': 'stimuli/saintbernard.png', 'path': 'stimuli/saintbernard.png'},
    {'name': 'conditions/conditions_ltm_138.xlsx', 'path': 'conditions/conditions_ltm_138.xlsx'},
    {'name': 'conditions/conditions_98.xlsx', 'path': 'conditions/conditions_98.xlsx'},
    {'name': 'stimuli/boot01.png', 'path': 'stimuli/boot01.png'},
    {'name': 'stim/coverImage.png', 'path': 'stim/coverImage.png'},
    {'name': 'conditions/conditions_122.xlsx', 'path': 'conditions/conditions_122.xlsx'},
    {'name': 'conditions/conditions_ltm_131.xlsx', 'path': 'conditions/conditions_ltm_131.xlsx'},
    {'name': 'conditions/instrcutions/instru_8.png', 'path': 'conditions/instrcutions/instru_8.png'},
    {'name': 'stimuli/acousticguitar02.png', 'path': 'stimuli/acousticguitar02.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://app.prolific.co/submissions/complete?cc=C1CFNI34', 'https://app.prolific.co/submissions/complete?cc=CQV9NILJ');

  return Scheduler.Event.NEXT;
}


var StartClock;
var thisExp;
var shuffle;
var average;
var startMouse;
var instructionsClock;
var img_no;
var current_img;
var instrDict;
var currentInstr;
var instruction;
var instrupic;
var instru_keys;
var random;
var win;
var event;
var adjustOr_instruClock;
var adjusting_header;
var log_response_instru;
var orientation;
var adjust_stim_instru;
var arrow_1;
var adjust_keys_intru;
var submit_instru;
var cover_image_instru;
var start_practiceClock;
var practice;
var practiceStart;
var delayClock;
var trial_start;
var training_stimClock;
var train_stim1;
var fixationCross_2;
var train_stim2;
var delay_train;
var retrocue_trainingClock;
var retrocue_stim_2;
var fixationcross_2;
var short_delay_2;
var training_ori_adjustmentClock;
var ori_list;
var log_response_training;
var adjust_keys_training;
var adjust_stim_training;
var arrow;
var coverimage_t1_2;
var imgChoice2;
var submit_t1_2;
var timeout_pracClock;
var image;
var testing_startClock;
var text;
var key_resp_3;
var loop_controlClock;
var thisBlock;
var input;
var id;
var main_task_blocks;
var trialCounterClock;
var ntrial;
var trialReal;
var polygon;
var presentation_stimsClock;
var Stim1;
var fixationCross;
var Stim2;
var delay_1;
var retrocueClock;
var retrocue_stim;
var fixationcross;
var short_delay;
var adjustOr_t1Clock;
var ntrial_WM;
var trialReal_WM;
var log_response_t1;
var adjust_stim;
var arrow_2;
var adjust_keys_t1;
var submit_t1;
var coverimage_t1;
var imgChoice1;
var timeoutClock;
var image_4;
var BREAKClock;
var breakText;
var key_resp_2;
var attentionCheckClock;
var AC_acc;
var hits_in_attention2;
var key_respAC_prac;
var Pos1_prac;
var Pos2_prac;
var Pos3_prac;
var Pos4_prac;
var taskAC_prac;
var ac_stim_prac;
var continueOrEndClock;
var numberQuits2;
var msgEndExperiment;
var textEndExperiment;
var pressToEndExp;
var quit_expClock;
var start_distractionClock;
var StartDistraction;
var keyStart_distraction;
var timeClock;
var distractionClock;
var textbox;
var dis_question;
var dis_log;
var dis_text;
var submit_button2_2;
var feedback_disClock;
var text_14;
var start_LTMClock;
var StartLTM;
var keyStart_LTM;
var loop_control_ltmClock;
var ltm_task_blocks;
var fixationcross2Clock;
var fixationcross3;
var LTM_testClock;
var log_responseLTM;
var contextStim_LTM;
var adjust_stim_LTM;
var arrow_4;
var adjust_keys_LTM;
var CoverImage_LTM;
var imgChoice3;
var submit_t1_3;
var timeout_LTMClock;
var image_2;
var bonusClock;
var msgBonus;
var get_bonus;
var presentBonus;
var key_bonus;
var feedback_expClock;
var textbox_exp_feedback;
var exp_feedback_log;
var dis_text_2;
var submit_button2;
var theEndClock;
var mouse_2;
var the_end;
var the_end_exp;
var redirection_prolific;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Start"
  StartClock = new util.Clock();
  thisExp = psychoJS.experiment;
  
  Array.prototype.append = [].push;
  shuffle = util.shuffle;
  average = (arr) => (arr.reduce((a, b) => (a + b), 0)) / arr.length;
  startMouse = new core.Mouse({
    win: psychoJS.window,
  });
  startMouse.mouseClock = new util.Clock();
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  img_no = 1;
  current_img = (("conditions/instrcutions/instru_" + img_no.toString()) + ".png");
  
  instrDict = {"1": "Welcome to this experiment!\nIf you exit fullscreen mode during the experiment you will be redirected to Prolific and cannot continue with the experiment.\nTo continue, please press the right arrow key on your keyboard.", "2": "During this experiment, we will test your short-term memory for object orientations.\n\nIn the following, we will explain how the task works.\n\nYou can navigate back and forth through the instructions by using the arrow keys.", "3": "We will always present two consecutive object images, which are rotated in some way.\n\nYou will be asked to remember the objects' orientation.\nThen we show a cue that tells you which object we are likely going to test you on. In the test we ask you to recall one of the objects orientation.\n\nIt always goes like this: We are showing you a first object and then a second, and you should keep each object and its orientation in memory.\nThen you see a cue ( \"1\" or \"2\" ) and a few seconds later, in the recall test, we ask you to recall the orientation of one of the objects. Let's have a detailed look at how the task goes on the following slides:", "4": "About the cue: After having seen the two objects you will see a hint in form of a cue (either a \"1\" or \"2\"). This cue will indicate which orientation we are most likely going to ask about. It can be a \"1\" for the first object or \"2\" for the second object we showed you. In most trials this cue will correctly tell you which object orientation you need to recall in the following test. In the example below the cue tells you correctly to recall object number \"1\", the crown. So, you will then be tested on the crown.", "5": "However, in a few trials the cue is not valid. In the example below the cue guides you that we are going to ask about the Eiffel Tower (\"2\"), however then the crown (\"1\") is tested.\nYou can therefore use the cue as a guide on which object to focus on, just be aware that there is a chance it might not be correct in a few cases which means you should to some extend keep both objects in memory.", "6": "Let's now have a look at how you can give your answer.\nSimple: at recall (test), we will show you the object in question in an orientation that is different from the one you remembered, and you will be asked to use the arrow keys on your keyboard to rotate the object to its original orientation. You can use the arrow keys to continuously rotate the object back and forth until you are happy with your answer.", "7": "Pressing the left arrow key will rotate the object to the left. Pressing the right arrow key will rotate the object to the right.\n\nYour answer can be logged by using the space bar on your keyboard, and the task continues.", "8": "Throughout the experiment, please try to respond both quickly and accurately. If you do not answer within a certain period of time, you will see the instruction 'please respond faster' on the screen, which indicates that you did not respond in time.\n\n At the end of the experiment, we will randomly select 10 of your responses. If your answers were mostly accurate, you will receive a bonus payment.\n\nIf you encounter any technical difficulties during the task, do not restart it, but rather return to Prolific.\n\nIf you exit fullscreen mode during the experiment you will be redirected to Prolific and cannot continue with the experiment!\n\nIn the following, you can practice how to answer by pressing the right and left arrow keys to rotate the object back to its original orientation.\n\n\n\n[Please press the right arrow when you're ready]", "9": "[Please press the right arrow when you have understood the instructions]", "10": "[Please press the right arrow when you're ready]"};
  currentInstr = "1";
  
  instruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: 1.0,
    depth: -2.0 
  });
  
  instrupic = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instrupic', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, (- 210)], size : [900, 506],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  instru_keys = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // alias for random func
  
  random = function (a) {
      return Math.random();
  }
  
  // also define randint
  
  function randint(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  
  thisExp=psychoJS.experiment;
  win=psychoJS.window;
  event=psychoJS.eventManager;
  
  // read in p=1 from the file - change later
  //var participantCount; 
  //participantCount = new TrialHandler({
  //    psychoJS: psychoJS,
  //    nReps: 1, method: TrialHandler.Method.RANDOM,
  //    extraInfo: expInfo, originPath: undefined,
  //    trialList: 'p_number_pilot.csv',
  //    seed: undefined, name: 'participantCount'
  //});
      
  //trialList = participantCount.getTrialList();    
  //p_number = trialList[0]['P_number'];
  
  //file_number = (Number.parseInt(p_number) + 1);
  
  // get width, height, browser id
  var sUsrAg;
  var nIdx;
  function getBrowserId () {
   var browsers = ["MSIE", "Firefox", "Safari", "Chrome", "Opera"];
   sUsrAg = window.navigator.userAgent,
   nIdx = browsers.length - 1;
   for (nIdx; nIdx > -1 && sUsrAg.indexOf(browsers [nIdx]) === -1; nIdx--);
   
    return browsers[nIdx];
  }
   
  expInfo['browser'] = getBrowserId();
  expInfo['xResolution'] = screen.width;
  expInfo['yResolution'] = screen.height;
  //W = screen.width;
  //H = screen.height;
  // Initialize components for Routine "adjustOr_instru"
  adjustOr_instruClock = new util.Clock();
  adjusting_header = new visual.TextStim({
    win: psychoJS.window,
    name: 'adjusting_header',
    text: 'Before we start with some practice trials, you can try out rotating the object with the right and left arrow keys on your keyboard. Go ahead and try! \n\nIn the experiment, you can always submit your answer using the space bar.\n\n[press space bar to continue]',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  log_response_instru = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  orientation = 0;
  
  adjust_stim_instru = new visual.ImageStim({
    win : psychoJS.window,
    name : 'adjust_stim_instru', units : 'pix', 
    image : 'stim/eiffeltower.png', mask : undefined,
    ori : 1.0, pos : [0, 0], size : [300, 300],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  arrow_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'arrow_1', units : 'pix', 
    image : 'stim/keys.png', mask : undefined,
    ori : 0.0, pos : [0, 220], size : [1000, 563],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  adjust_keys_intru = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  submit_instru = new visual.TextStim({
    win: psychoJS.window,
    name: 'submit_instru',
    text: 'Click space to submit your answer',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('red'),  opacity: 1.0,
    depth: -6.0 
  });
  
  cover_image_instru = new visual.ImageStim({
    win : psychoJS.window,
    name : 'cover_image_instru', units : 'pix', 
    image : 'stim/coverImage.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [350, 350],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  // Initialize components for Routine "start_practice"
  start_practiceClock = new util.Clock();
  practice = new visual.TextStim({
    win: psychoJS.window,
    name: 'practice',
    text: "Now let’s practice a couple of example trials of  the actual task!\n\nDon't worry about making mistakes, just try to get a good grip on the task.\n\n[Press the space bar when you’re ready to start]",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: 1.0,
    depth: 0.0 
  });
  
  practiceStart = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "delay"
  delayClock = new util.Clock();
  trial_start = new visual.ShapeStim ({
    win: psychoJS.window, name: 'trial_start', units : 'pix', 
    vertices: 'cross', size:[20, 20],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('grey'),
    fillColor: new util.Color('grey'),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "training_stim"
  training_stimClock = new util.Clock();
  train_stim1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'train_stim1', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 1.0, pos : [0, 0], size : [300, 300],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  fixationCross_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixationCross_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  train_stim2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'train_stim2', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 1.0, pos : [0, 0], size : [300, 300],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  delay_train = new visual.TextStim({
    win: psychoJS.window,
    name: 'delay_train',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "retrocue_training"
  retrocue_trainingClock = new util.Clock();
  retrocue_stim_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'retrocue_stim_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  fixationcross_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixationcross_2',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  short_delay_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'short_delay_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "training_ori_adjustment"
  training_ori_adjustmentClock = new util.Clock();
  ori_list = [];
  
  log_response_training = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  adjust_keys_training = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  adjust_stim_training = new visual.ImageStim({
    win : psychoJS.window,
    name : 'adjust_stim_training', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 1.0, pos : [0, 0], size : [300, 300],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  arrow = new visual.ImageStim({
    win : psychoJS.window,
    name : 'arrow', units : 'pix', 
    image : 'stim/keys.png', mask : undefined,
    ori : 0.0, pos : [0, 230], size : [1000, 563],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  coverimage_t1_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'coverimage_t1_2', units : 'pix', 
    image : 'stim/coverImage.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [350, 350],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  imgChoice2 = "stim/keys.png";
  
  submit_t1_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'submit_t1_2',
    text: 'Click space to submit your answer',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('grey'),  opacity: 1.0,
    depth: -7.0 
  });
  
  // Initialize components for Routine "timeout_prac"
  timeout_pracClock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 215], size : [1000, 563],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "testing_start"
  testing_startClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Well done! \n\nWe will now start with the experiment. You will be able to take a short break after finishing 50 % of the trials.\n\nRemember, you can earn a bonus for answering correctly. \n\n[Press the space bar when you’re ready to start]',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "loop_control"
  loop_controlClock = new util.Clock();
  thisBlock = 0;
  //variable to determine conditions file
  input = await fetch("https://920-rider-3-142.exp.arc.mpib.org/api/inputs/by-group/ids").then(r => r.json());
  id = input.id;
  //id = 4;
  psychoJS.experiment.addData("participant_id",id);
  main_task_blocks = (("conditions/conditions_" + id.toString()) + ".xlsx");
  
  // Initialize components for Routine "trialCounter"
  trialCounterClock = new util.Clock();
  ntrial = 0;
  trialReal = [];
  
  polygon = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon', units : 'pix', 
    vertices: 'cross', size:[20, 20],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('grey'),
    fillColor: new util.Color('grey'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  // Initialize components for Routine "presentation_stims"
  presentation_stimsClock = new util.Clock();
  Stim1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Stim1', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 1.0, pos : [0, 0], size : [300, 300],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  fixationCross = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixationCross',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  Stim2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Stim2', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 1.0, pos : [0, 0], size : [300, 300],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  delay_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'delay_1',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "retrocue"
  retrocueClock = new util.Clock();
  retrocue_stim = new visual.TextStim({
    win: psychoJS.window,
    name: 'retrocue_stim',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.06,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  fixationcross = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixationcross',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  short_delay = new visual.TextStim({
    win: psychoJS.window,
    name: 'short_delay',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "adjustOr_t1"
  adjustOr_t1Clock = new util.Clock();
  ntrial_WM = -1;//to let it start with 0 in first trial
  trialReal_WM = [];
  
  ori_list = [];
  
  log_response_t1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  adjust_stim = new visual.ImageStim({
    win : psychoJS.window,
    name : 'adjust_stim', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 1.0, pos : [0, 0], size : [300, 300],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  arrow_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'arrow_2', units : 'pix', 
    image : 'stim/keys.png', mask : undefined,
    ori : 0.0, pos : [0, 230], size : [1000, 563],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  adjust_keys_t1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  submit_t1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'submit_t1',
    text: 'Click space to submit your answer',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('grey'),  opacity: 1.0,
    depth: -6.0 
  });
  
  coverimage_t1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'coverimage_t1', units : 'pix', 
    image : 'stim/coverImage.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [350, 350],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  imgChoice1 = "stim/keys.png";
  
  // Initialize components for Routine "timeout"
  timeoutClock = new util.Clock();
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 215], size : [1000, 563],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "BREAK"
  BREAKClock = new util.Clock();
  breakText = new visual.TextStim({
    win: psychoJS.window,
    name: 'breakText',
    text: 'Now you can take a short break (2 minutes max.).\n\n[Press the space bar when you’re ready to continue]\n\n\n\n\n\n\n\n\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "attentionCheck"
  attentionCheckClock = new util.Clock();
  AC_acc = [];
  hits_in_attention2 = 0;
  
  key_respAC_prac = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Pos1_prac = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pos1_prac',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.25], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  Pos2_prac = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pos2_prac',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0.3, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  Pos3_prac = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pos3_prac',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  Pos4_prac = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pos4_prac',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -5.0 
  });
  
  taskAC_prac = new visual.TextStim({
    win: psychoJS.window,
    name: 'taskAC_prac',
    text: 'Use arrow keys to pick the number shown in the center',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -6.0 
  });
  
  ac_stim_prac = new visual.TextStim({
    win: psychoJS.window,
    name: 'ac_stim_prac',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('red'),  opacity: 1,
    depth: -7.0 
  });
  
  // Initialize components for Routine "continueOrEnd"
  continueOrEndClock = new util.Clock();
  numberQuits2 = 0;
  msgEndExperiment = "text after attention checks";
  
  textEndExperiment = new visual.TextStim({
    win: psychoJS.window,
    name: 'textEndExperiment',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  pressToEndExp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "quit_exp"
  quit_expClock = new util.Clock();
  // Initialize components for Routine "start_distraction"
  start_distractionClock = new util.Clock();
  StartDistraction = new visual.TextStim({
    win: psychoJS.window,
    name: 'StartDistraction',
    text: 'Well done! \n\nYou have successfully completed the first task. We will now ask you to do some basic mental math (e.g., subtracting 7 from 100 for a short period of time). \nYou are free to take a short break now before beginning the next task (max. 2 minutes).\n\n\n[Press the space bar when you’re ready to start]',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  keyStart_distraction = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "time"
  timeClock = new util.Clock();
  // Initialize components for Routine "distraction"
  distractionClock = new util.Clock();
  textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox',
    text: '',
    font: 'Open Sans',
    pos: [0, (- 0.1)], letterHeight: 0.05,
    size: [null, null],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  dis_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'dis_question',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  dis_log = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  dis_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'dis_text',
    text: 'Please count down from 100 in steps of sevens (7) and type your answer in the textbox below. \n\n\n[You can log each answer by clicking the space bar.]\n\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  submit_button2_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'submit_button2_2',
    text: 'Click space to submit your answer',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: 1.0,
    depth: -5.0 
  });
  
  // Initialize components for Routine "feedback_dis"
  feedback_disClock = new util.Clock();
  text_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_14',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "start_LTM"
  start_LTMClock = new util.Clock();
  StartLTM = new visual.TextStim({
    win: psychoJS.window,
    name: 'StartLTM',
    text: 'Well done! \n\nYou have now completed most of the task. But there is still one important part to come.\n\nIn this experiment’s last part, we will show you each object once again, in random rotations. We ask you to adjust the orientation of each object once more to match the orientation it had when we showed it to you for the very first time. We understand this might sometimes be hard. Just try the best you can!\n\n\n\nYou can enter your responses as before,  by rotating each object with the left and right arrow keys, and then hitting the space bar to submit your repsonse.\n\n\n\n\n\n\n\n\n\n\n[Press the space bar when you’re ready to start]',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  keyStart_LTM = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "loop_control_ltm"
  loop_control_ltmClock = new util.Clock();
  thisBlock = 0;
  //variable to determine conditions file
  ltm_task_blocks = (("conditions/conditions_ltm_" + id.toString()) + ".xlsx");
  
  // Initialize components for Routine "fixationcross2"
  fixationcross2Clock = new util.Clock();
  ntrial = 0;
  trialReal = [];
  
  fixationcross3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixationcross3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "LTM_test"
  LTM_testClock = new util.Clock();
  ori_list = [];
  
  log_responseLTM = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  contextStim_LTM = new visual.TextStim({
    win: psychoJS.window,
    name: 'contextStim_LTM',
    text: 'Recall',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('green'),  opacity: undefined,
    depth: -2.0 
  });
  
  adjust_stim_LTM = new visual.ImageStim({
    win : psychoJS.window,
    name : 'adjust_stim_LTM', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 1.0, pos : [0, 0], size : [300, 300],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  arrow_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'arrow_4', units : 'pix', 
    image : 'stim/keys.png', mask : undefined,
    ori : 0.0, pos : [0, 230], size : [1000, 563],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  adjust_keys_LTM = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  CoverImage_LTM = new visual.ImageStim({
    win : psychoJS.window,
    name : 'CoverImage_LTM', units : 'pix', 
    image : 'stim/coverImage.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [350, 350],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  imgChoice3 = "stim/keys.png";
  
  submit_t1_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'submit_t1_3',
    text: 'Click space to submit your answer',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('grey'),  opacity: 1.0,
    depth: -8.0 
  });
  
  // Initialize components for Routine "timeout_LTM"
  timeout_LTMClock = new util.Clock();
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 215], size : [1000, 563],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "bonus"
  bonusClock = new util.Clock();
  msgBonus = "Feedback msg to say if participant gets bonus";
  get_bonus = [];
  
  presentBonus = new visual.TextStim({
    win: psychoJS.window,
    name: 'presentBonus',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  key_bonus = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "feedback_exp"
  feedback_expClock = new util.Clock();
  textbox_exp_feedback = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_exp_feedback',
    text: '',
    font: 'Open Sans',
    pos: [0, (- 0.1)], letterHeight: 0.02,
    size: [null, null],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  exp_feedback_log = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  dis_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'dis_text_2',
    text: 'We are almost at the end of this experiment. \n\nIn this last step we would like to ask you for your feedback. Feel free to tell us how difficult the task was for you or which strategy (if any) you used to solve the task.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  submit_button2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'submit_button2',
    text: '[When you are ready, please press “right arrow” key to go to our last message.]\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: 1.0,
    depth: -4.0 
  });
  
  // Initialize components for Routine "theEnd"
  theEndClock = new util.Clock();
  //code_JS from crib sheet
  thisExp=psychoJS.experiment;
  win=psychoJS.window;
  event=psychoJS.eventManager;
  
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  the_end = new visual.TextStim({
    win: psychoJS.window,
    name: 'the_end',
    text: "Great! You finished the task. Thank you! \n\nIn the next window, which will appear shortly, press “OK” (see image below).\n\nOnly after pressing “OK”, you'll be directed to Prolific's website.\n\nNow press “space” to get there.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  the_end_exp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  redirection_prolific = new visual.ImageStim({
    win : psychoJS.window,
    name : 'redirection_prolific', units : undefined, 
    image : 'stim/pic_redirection_prolific.png', mask : undefined,
    ori : 0.0, pos : [0, (- 0.25)], size : [0.5, 0.3],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var gotValidClick;
var StartComponents;
function StartRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Start'-------
    t = 0;
    StartClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    // setup some python lists for storing info about the startMouse
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    StartComponents = [];
    StartComponents.push(startMouse);
    
    StartComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var frameRemains;
var _mouseButtons;
function StartRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Start'-------
    // get current time
    t = StartClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *startMouse* updates
    if (t >= 0.0 && startMouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      startMouse.tStart = t;  // (not accounting for frame time here)
      startMouse.frameNStart = frameN;  // exact frame index
      
      startMouse.status = PsychoJS.Status.STARTED;
      startMouse.mouseClock.reset();
      prevButtonState = startMouse.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 0.5  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((startMouse.status === PsychoJS.Status.STARTED || startMouse.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      startMouse.status = PsychoJS.Status.FINISHED;
  }
    if (startMouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = startMouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    StartComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _mouseXYs;
function StartRoutineEnd() {
  return async function () {
    //------Ending Routine 'Start'-------
    StartComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    _mouseXYs = startMouse.getPos();
    _mouseButtons = startMouse.getPressed();
    psychoJS.experiment.addData('startMouse.x', _mouseXYs[0]);
    psychoJS.experiment.addData('startMouse.y', _mouseXYs[1]);
    psychoJS.experiment.addData('startMouse.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('startMouse.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('startMouse.rightButton', _mouseButtons[2]);
    return Scheduler.Event.NEXT;
  };
}


var instrLoop;
var currentLoop;
function instrLoopLoopBegin(instrLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    instrLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 100, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'instrLoop'
    });
    psychoJS.experiment.addLoop(instrLoop); // add the loop to the experiment
    currentLoop = instrLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    instrLoop.forEach(function() {
      const snapshot = instrLoop.getSnapshot();
    
      instrLoopLoopScheduler.add(importConditions(snapshot));
      instrLoopLoopScheduler.add(instructionsRoutineBegin(snapshot));
      instrLoopLoopScheduler.add(instructionsRoutineEachFrame());
      instrLoopLoopScheduler.add(instructionsRoutineEnd());
      instrLoopLoopScheduler.add(endLoopIteration(instrLoopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function instrLoopLoopEnd() {
  psychoJS.experiment.removeLoop(instrLoop);

  return Scheduler.Event.NEXT;
}


var training_loop;
function training_loopLoopBegin(training_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    training_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions/training.xlsx',
      seed: undefined, name: 'training_loop'
    });
    psychoJS.experiment.addLoop(training_loop); // add the loop to the experiment
    currentLoop = training_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    training_loop.forEach(function() {
      const snapshot = training_loop.getSnapshot();
    
      training_loopLoopScheduler.add(importConditions(snapshot));
      training_loopLoopScheduler.add(delayRoutineBegin(snapshot));
      training_loopLoopScheduler.add(delayRoutineEachFrame());
      training_loopLoopScheduler.add(delayRoutineEnd());
      training_loopLoopScheduler.add(training_stimRoutineBegin(snapshot));
      training_loopLoopScheduler.add(training_stimRoutineEachFrame());
      training_loopLoopScheduler.add(training_stimRoutineEnd());
      training_loopLoopScheduler.add(retrocue_trainingRoutineBegin(snapshot));
      training_loopLoopScheduler.add(retrocue_trainingRoutineEachFrame());
      training_loopLoopScheduler.add(retrocue_trainingRoutineEnd());
      training_loopLoopScheduler.add(training_ori_adjustmentRoutineBegin(snapshot));
      training_loopLoopScheduler.add(training_ori_adjustmentRoutineEachFrame());
      training_loopLoopScheduler.add(training_ori_adjustmentRoutineEnd());
      const timeout_pLoopScheduler = new Scheduler(psychoJS);
      training_loopLoopScheduler.add(timeout_pLoopBegin(timeout_pLoopScheduler, snapshot));
      training_loopLoopScheduler.add(timeout_pLoopScheduler);
      training_loopLoopScheduler.add(timeout_pLoopEnd);
      training_loopLoopScheduler.add(endLoopIteration(training_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var timeout_p;
function timeout_pLoopBegin(timeout_pLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    timeout_p = new TrialHandler({
      psychoJS: psychoJS,
      nReps: timeout_practice, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'timeout_p'
    });
    psychoJS.experiment.addLoop(timeout_p); // add the loop to the experiment
    currentLoop = timeout_p;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    timeout_p.forEach(function() {
      const snapshot = timeout_p.getSnapshot();
    
      timeout_pLoopScheduler.add(importConditions(snapshot));
      timeout_pLoopScheduler.add(timeout_pracRoutineBegin(snapshot));
      timeout_pLoopScheduler.add(timeout_pracRoutineEachFrame());
      timeout_pLoopScheduler.add(timeout_pracRoutineEnd());
      timeout_pLoopScheduler.add(endLoopIteration(timeout_pLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function timeout_pLoopEnd() {
  psychoJS.experiment.removeLoop(timeout_p);

  return Scheduler.Event.NEXT;
}


async function training_loopLoopEnd() {
  psychoJS.experiment.removeLoop(training_loop);

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 4, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      const snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(loop_controlRoutineBegin(snapshot));
      trialsLoopScheduler.add(loop_controlRoutineEachFrame());
      trialsLoopScheduler.add(loop_controlRoutineEnd());
      const trials_2LoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(trials_2LoopBegin(trials_2LoopScheduler, snapshot));
      trialsLoopScheduler.add(trials_2LoopScheduler);
      trialsLoopScheduler.add(trials_2LoopEnd);
      const break_trialLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(break_trialLoopBegin(break_trialLoopScheduler, snapshot));
      trialsLoopScheduler.add(break_trialLoopScheduler);
      trialsLoopScheduler.add(break_trialLoopEnd);
      const AttentionExpLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(AttentionExpLoopBegin(AttentionExpLoopScheduler, snapshot));
      trialsLoopScheduler.add(AttentionExpLoopScheduler);
      trialsLoopScheduler.add(AttentionExpLoopEnd);
      const trials_attLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(trials_attLoopBegin(trials_attLoopScheduler, snapshot));
      trialsLoopScheduler.add(trials_attLoopScheduler);
      trialsLoopScheduler.add(trials_attLoopEnd);
      const quitExpLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(quitExpLoopBegin(quitExpLoopScheduler, snapshot));
      trialsLoopScheduler.add(quitExpLoopScheduler);
      trialsLoopScheduler.add(quitExpLoopEnd);
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, main_task_blocks, MyIndicesMain),
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_2.forEach(function() {
      const snapshot = trials_2.getSnapshot();
    
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(trialCounterRoutineBegin(snapshot));
      trials_2LoopScheduler.add(trialCounterRoutineEachFrame());
      trials_2LoopScheduler.add(trialCounterRoutineEnd());
      trials_2LoopScheduler.add(presentation_stimsRoutineBegin(snapshot));
      trials_2LoopScheduler.add(presentation_stimsRoutineEachFrame());
      trials_2LoopScheduler.add(presentation_stimsRoutineEnd());
      trials_2LoopScheduler.add(retrocueRoutineBegin(snapshot));
      trials_2LoopScheduler.add(retrocueRoutineEachFrame());
      trials_2LoopScheduler.add(retrocueRoutineEnd());
      trials_2LoopScheduler.add(adjustOr_t1RoutineBegin(snapshot));
      trials_2LoopScheduler.add(adjustOr_t1RoutineEachFrame());
      trials_2LoopScheduler.add(adjustOr_t1RoutineEnd());
      const trials_3LoopScheduler = new Scheduler(psychoJS);
      trials_2LoopScheduler.add(trials_3LoopBegin(trials_3LoopScheduler, snapshot));
      trials_2LoopScheduler.add(trials_3LoopScheduler);
      trials_2LoopScheduler.add(trials_3LoopEnd);
      trials_2LoopScheduler.add(endLoopIteration(trials_2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trials_3;
function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: timeout, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_3.forEach(function() {
      const snapshot = trials_3.getSnapshot();
    
      trials_3LoopScheduler.add(importConditions(snapshot));
      trials_3LoopScheduler.add(timeoutRoutineBegin(snapshot));
      trials_3LoopScheduler.add(timeoutRoutineEachFrame());
      trials_3LoopScheduler.add(timeoutRoutineEnd());
      trials_3LoopScheduler.add(endLoopIteration(trials_3LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_3LoopEnd() {
  psychoJS.experiment.removeLoop(trials_3);

  return Scheduler.Event.NEXT;
}


async function trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_2);

  return Scheduler.Event.NEXT;
}


var break_trial;
function break_trialLoopBegin(break_trialLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    break_trial = new TrialHandler({
      psychoJS: psychoJS,
      nReps: break_routine, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'break_trial'
    });
    psychoJS.experiment.addLoop(break_trial); // add the loop to the experiment
    currentLoop = break_trial;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    break_trial.forEach(function() {
      const snapshot = break_trial.getSnapshot();
    
      break_trialLoopScheduler.add(importConditions(snapshot));
      break_trialLoopScheduler.add(BREAKRoutineBegin(snapshot));
      break_trialLoopScheduler.add(BREAKRoutineEachFrame());
      break_trialLoopScheduler.add(BREAKRoutineEnd());
      break_trialLoopScheduler.add(endLoopIteration(break_trialLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function break_trialLoopEnd() {
  psychoJS.experiment.removeLoop(break_trial);

  return Scheduler.Event.NEXT;
}


var AttentionExp;
function AttentionExpLoopBegin(AttentionExpLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    AttentionExp = new TrialHandler({
      psychoJS: psychoJS,
      nReps: repsAC, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'conditions/attentionChecks.xlsx', '1:7'),
      seed: undefined, name: 'AttentionExp'
    });
    psychoJS.experiment.addLoop(AttentionExp); // add the loop to the experiment
    currentLoop = AttentionExp;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    AttentionExp.forEach(function() {
      const snapshot = AttentionExp.getSnapshot();
    
      AttentionExpLoopScheduler.add(importConditions(snapshot));
      AttentionExpLoopScheduler.add(attentionCheckRoutineBegin(snapshot));
      AttentionExpLoopScheduler.add(attentionCheckRoutineEachFrame());
      AttentionExpLoopScheduler.add(attentionCheckRoutineEnd());
      AttentionExpLoopScheduler.add(endLoopIteration(AttentionExpLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function AttentionExpLoopEnd() {
  psychoJS.experiment.removeLoop(AttentionExp);

  return Scheduler.Event.NEXT;
}


var trials_att;
function trials_attLoopBegin(trials_attLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_att = new TrialHandler({
      psychoJS: psychoJS,
      nReps: numberACresults, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_att'
    });
    psychoJS.experiment.addLoop(trials_att); // add the loop to the experiment
    currentLoop = trials_att;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_att.forEach(function() {
      const snapshot = trials_att.getSnapshot();
    
      trials_attLoopScheduler.add(importConditions(snapshot));
      trials_attLoopScheduler.add(continueOrEndRoutineBegin(snapshot));
      trials_attLoopScheduler.add(continueOrEndRoutineEachFrame());
      trials_attLoopScheduler.add(continueOrEndRoutineEnd());
      trials_attLoopScheduler.add(endLoopIteration(trials_attLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_attLoopEnd() {
  psychoJS.experiment.removeLoop(trials_att);

  return Scheduler.Event.NEXT;
}


var quitExp;
function quitExpLoopBegin(quitExpLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    quitExp = new TrialHandler({
      psychoJS: psychoJS,
      nReps: numberQuits2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'quitExp'
    });
    psychoJS.experiment.addLoop(quitExp); // add the loop to the experiment
    currentLoop = quitExp;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    quitExp.forEach(function() {
      const snapshot = quitExp.getSnapshot();
    
      quitExpLoopScheduler.add(importConditions(snapshot));
      quitExpLoopScheduler.add(quit_expRoutineBegin(snapshot));
      quitExpLoopScheduler.add(quit_expRoutineEachFrame());
      quitExpLoopScheduler.add(quit_expRoutineEnd());
      quitExpLoopScheduler.add(endLoopIteration(quitExpLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function quitExpLoopEnd() {
  psychoJS.experiment.removeLoop(quitExp);

  return Scheduler.Event.NEXT;
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var disTrials;
function disTrialsLoopBegin(disTrialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    disTrials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions/distractorTask.xlsx',
      seed: undefined, name: 'disTrials'
    });
    psychoJS.experiment.addLoop(disTrials); // add the loop to the experiment
    currentLoop = disTrials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    disTrials.forEach(function() {
      const snapshot = disTrials.getSnapshot();
    
      disTrialsLoopScheduler.add(importConditions(snapshot));
      disTrialsLoopScheduler.add(timeRoutineBegin(snapshot));
      disTrialsLoopScheduler.add(timeRoutineEachFrame());
      disTrialsLoopScheduler.add(timeRoutineEnd());
      disTrialsLoopScheduler.add(distractionRoutineBegin(snapshot));
      disTrialsLoopScheduler.add(distractionRoutineEachFrame());
      disTrialsLoopScheduler.add(distractionRoutineEnd());
      disTrialsLoopScheduler.add(feedback_disRoutineBegin(snapshot));
      disTrialsLoopScheduler.add(feedback_disRoutineEachFrame());
      disTrialsLoopScheduler.add(feedback_disRoutineEnd());
      disTrialsLoopScheduler.add(endLoopIteration(disTrialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function disTrialsLoopEnd() {
  psychoJS.experiment.removeLoop(disTrials);

  return Scheduler.Event.NEXT;
}


var LTMtrial;
function LTMtrialLoopBegin(LTMtrialLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    LTMtrial = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: ltm_task_blocks,
      seed: undefined, name: 'LTMtrial'
    });
    psychoJS.experiment.addLoop(LTMtrial); // add the loop to the experiment
    currentLoop = LTMtrial;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    LTMtrial.forEach(function() {
      const snapshot = LTMtrial.getSnapshot();
    
      LTMtrialLoopScheduler.add(importConditions(snapshot));
      LTMtrialLoopScheduler.add(loop_control_ltmRoutineBegin(snapshot));
      LTMtrialLoopScheduler.add(loop_control_ltmRoutineEachFrame());
      LTMtrialLoopScheduler.add(loop_control_ltmRoutineEnd());
      LTMtrialLoopScheduler.add(fixationcross2RoutineBegin(snapshot));
      LTMtrialLoopScheduler.add(fixationcross2RoutineEachFrame());
      LTMtrialLoopScheduler.add(fixationcross2RoutineEnd());
      LTMtrialLoopScheduler.add(LTM_testRoutineBegin(snapshot));
      LTMtrialLoopScheduler.add(LTM_testRoutineEachFrame());
      LTMtrialLoopScheduler.add(LTM_testRoutineEnd());
      const trials_4LoopScheduler = new Scheduler(psychoJS);
      LTMtrialLoopScheduler.add(trials_4LoopBegin(trials_4LoopScheduler, snapshot));
      LTMtrialLoopScheduler.add(trials_4LoopScheduler);
      LTMtrialLoopScheduler.add(trials_4LoopEnd);
      LTMtrialLoopScheduler.add(endLoopIteration(LTMtrialLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trials_4;
function trials_4LoopBegin(trials_4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: timeout_ltm, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_4'
    });
    psychoJS.experiment.addLoop(trials_4); // add the loop to the experiment
    currentLoop = trials_4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_4.forEach(function() {
      const snapshot = trials_4.getSnapshot();
    
      trials_4LoopScheduler.add(importConditions(snapshot));
      trials_4LoopScheduler.add(timeout_LTMRoutineBegin(snapshot));
      trials_4LoopScheduler.add(timeout_LTMRoutineEachFrame());
      trials_4LoopScheduler.add(timeout_LTMRoutineEnd());
      trials_4LoopScheduler.add(endLoopIteration(trials_4LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_4LoopEnd() {
  psychoJS.experiment.removeLoop(trials_4);

  return Scheduler.Event.NEXT;
}


async function LTMtrialLoopEnd() {
  psychoJS.experiment.removeLoop(LTMtrial);

  return Scheduler.Event.NEXT;
}


var BonusLoop;
function BonusLoopLoopBegin(BonusLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    BonusLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'BonusLoop'
    });
    psychoJS.experiment.addLoop(BonusLoop); // add the loop to the experiment
    currentLoop = BonusLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    BonusLoop.forEach(function() {
      const snapshot = BonusLoop.getSnapshot();
    
      BonusLoopLoopScheduler.add(importConditions(snapshot));
      BonusLoopLoopScheduler.add(bonusRoutineBegin(snapshot));
      BonusLoopLoopScheduler.add(bonusRoutineEachFrame());
      BonusLoopLoopScheduler.add(bonusRoutineEnd());
      BonusLoopLoopScheduler.add(endLoopIteration(BonusLoopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function BonusLoopLoopEnd() {
  psychoJS.experiment.removeLoop(BonusLoop);

  return Scheduler.Event.NEXT;
}


var _instru_keys_allKeys;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instructions'-------
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    current_img = (("conditions/instrcutions/instru_" + img_no.toString()) + ".png");
    
    instruction.setText(instrDict[currentInstr]);
    instrupic.setImage(current_img);
    instru_keys.keys = undefined;
    instru_keys.rt = undefined;
    _instru_keys_allKeys = [];
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(instruction);
    instructionsComponents.push(instrupic);
    instructionsComponents.push(instru_keys);
    
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instructions'-------
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction* updates
    if (t >= 0.0 && instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction.tStart = t;  // (not accounting for frame time here)
      instruction.frameNStart = frameN;  // exact frame index
      
      instruction.setAutoDraw(true);
    }

    
    // *instrupic* updates
    if (t >= 0.0 && instrupic.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrupic.tStart = t;  // (not accounting for frame time here)
      instrupic.frameNStart = frameN;  // exact frame index
      
      instrupic.setAutoDraw(true);
    }

    
    // *instru_keys* updates
    if (t >= 0.0 && instru_keys.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instru_keys.tStart = t;  // (not accounting for frame time here)
      instru_keys.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      instru_keys.clock.reset();
      instru_keys.start();
    }

    if (instru_keys.status === PsychoJS.Status.STARTED) {
      let theseKeys = instru_keys.getKeys({keyList: ['right', 'space', 'left'], waitRelease: false});
      _instru_keys_allKeys = _instru_keys_allKeys.concat(theseKeys);
      if (_instru_keys_allKeys.length > 0) {
        instru_keys.keys = _instru_keys_allKeys[_instru_keys_allKeys.length - 1].name;  // just the last key pressed
        instru_keys.rt = _instru_keys_allKeys[_instru_keys_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd() {
  return async function () {
    //------Ending Routine 'instructions'-------
    instructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if (((img_no > 1) && ((instru_keys.keys === "left".toString()) || (instru_keys.keys === "left")))) {
        img_no -= 1;
    } else {
        if (((img_no < 10) && ((instru_keys.keys === "right".toString()) || (instru_keys.keys === "right")))) {
            img_no += 1;
        } else {
            if (((img_no === 9) && ((instru_keys.keys === "space") || (instru_keys.keys === "space".toString())))) {
                instructionsLoop.finished = true;
                trials.finished = true;
            }
        }
    }
    current_img = (("conditions/instrcutions/instru_" + img_no.toString()) + ".png");
    
    console.log(instru_keys.keys);
    if ((instru_keys.keys === "left")) {
        currentInstr = (Number.parseInt(currentInstr) - 1);
    } else {
        if ((instru_keys.keys === "right")) {
            currentInstr = (Number.parseInt(currentInstr) + 1);
        }
    }
    if ((currentInstr === 0)) {
        currentInstr = 1;
    } else {
        if ((currentInstr === 9)) {
            instrLoop.finished = true;
        }
    }
    currentInstr = currentInstr.toString();
    
    psychoJS.experiment.addData('instru_keys.keys', instru_keys.keys);
    if (typeof instru_keys.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instru_keys.rt', instru_keys.rt);
        routineTimer.reset();
        }
    
    instru_keys.stop();
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _log_response_instru_allKeys;
var keySpeed;
var increasePerFrame;
var _adjust_keys_intru_allKeys;
var adjustOr_instruComponents;
function adjustOr_instruRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'adjustOr_instru'-------
    t = 0;
    adjustOr_instruClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    log_response_instru.keys = undefined;
    log_response_instru.rt = undefined;
    _log_response_instru_allKeys = [];
    orientation = 0;
    keySpeed = 1;
    increasePerFrame = 0.1;
    
    adjust_keys_intru.keys = undefined;
    adjust_keys_intru.rt = undefined;
    _adjust_keys_intru_allKeys = [];
    // keep track of which components have finished
    adjustOr_instruComponents = [];
    adjustOr_instruComponents.push(adjusting_header);
    adjustOr_instruComponents.push(log_response_instru);
    adjustOr_instruComponents.push(adjust_stim_instru);
    adjustOr_instruComponents.push(arrow_1);
    adjustOr_instruComponents.push(adjust_keys_intru);
    adjustOr_instruComponents.push(submit_instru);
    adjustOr_instruComponents.push(cover_image_instru);
    
    adjustOr_instruComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var keys;
var key;
function adjustOr_instruRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'adjustOr_instru'-------
    // get current time
    t = adjustOr_instruClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *adjusting_header* updates
    if (t >= 0.0 && adjusting_header.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      adjusting_header.tStart = t;  // (not accounting for frame time here)
      adjusting_header.frameNStart = frameN;  // exact frame index
      
      adjusting_header.setAutoDraw(true);
    }

    
    // *log_response_instru* updates
    if (t >= 0.0 && log_response_instru.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      log_response_instru.tStart = t;  // (not accounting for frame time here)
      log_response_instru.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { log_response_instru.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { log_response_instru.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { log_response_instru.clearEvents(); });
    }

    if (log_response_instru.status === PsychoJS.Status.STARTED) {
      let theseKeys = log_response_instru.getKeys({keyList: ['right', 'left'], waitRelease: false});
      _log_response_instru_allKeys = _log_response_instru_allKeys.concat(theseKeys);
      if (_log_response_instru_allKeys.length > 0) {
        log_response_instru.keys = _log_response_instru_allKeys.map((key) => key.name);  // storing all keys
        log_response_instru.rt = _log_response_instru_allKeys.map((key) => key.rt);
      }
    }
    
    keys = adjust_keys_intru.getKeys({"waitRelease": false, "clear": false});
    if ((keys.length > 0)) {
        key = keys[(keys.length - 1)];
        if ((! key.duration)) {
            keySpeed += increasePerFrame;
            if ((keySpeed > 10)) {
                keySpeed = 0.5;
            }
            if ((key.name === "left")) {
                orientation += keySpeed;
            }
            if ((key.name === "right")) {
                orientation -= keySpeed;
            }
        } else {
            keySpeed = 0.5;
        }
    }
    
    // *adjust_stim_instru* updates
    if (t >= 0.0 && adjust_stim_instru.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      adjust_stim_instru.tStart = t;  // (not accounting for frame time here)
      adjust_stim_instru.frameNStart = frameN;  // exact frame index
      
      adjust_stim_instru.setAutoDraw(true);
    }

    
    if (adjust_stim_instru.status === PsychoJS.Status.STARTED){ // only update if being drawn
      adjust_stim_instru.setOri(orientation, false);
    }
    
    // *arrow_1* updates
    if (t >= 0.0 && arrow_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      arrow_1.tStart = t;  // (not accounting for frame time here)
      arrow_1.frameNStart = frameN;  // exact frame index
      
      arrow_1.setAutoDraw(true);
    }

    
    // *adjust_keys_intru* updates
    if (t >= 0.0 && adjust_keys_intru.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      adjust_keys_intru.tStart = t;  // (not accounting for frame time here)
      adjust_keys_intru.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { adjust_keys_intru.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { adjust_keys_intru.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { adjust_keys_intru.clearEvents(); });
    }

    if (adjust_keys_intru.status === PsychoJS.Status.STARTED) {
      let theseKeys = adjust_keys_intru.getKeys({keyList: ['space'], waitRelease: false});
      _adjust_keys_intru_allKeys = _adjust_keys_intru_allKeys.concat(theseKeys);
      if (_adjust_keys_intru_allKeys.length > 0) {
        adjust_keys_intru.keys = _adjust_keys_intru_allKeys.map((key) => key.name);  // storing all keys
        adjust_keys_intru.rt = _adjust_keys_intru_allKeys.map((key) => key.rt);
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *submit_instru* updates
    if (t >= 0.0 && submit_instru.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      submit_instru.tStart = t;  // (not accounting for frame time here)
      submit_instru.frameNStart = frameN;  // exact frame index
      
      submit_instru.setAutoDraw(true);
    }

    
    // *cover_image_instru* updates
    if (t >= 0.0 && cover_image_instru.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cover_image_instru.tStart = t;  // (not accounting for frame time here)
      cover_image_instru.frameNStart = frameN;  // exact frame index
      
      cover_image_instru.setAutoDraw(true);
    }

    frameRemains = 0.2  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((cover_image_instru.status === PsychoJS.Status.STARTED || cover_image_instru.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      cover_image_instru.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    adjustOr_instruComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function adjustOr_instruRoutineEnd() {
  return async function () {
    //------Ending Routine 'adjustOr_instru'-------
    adjustOr_instruComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('log_response_instru.keys', log_response_instru.keys);
    if (typeof log_response_instru.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('log_response_instru.rt', log_response_instru.rt);
        }
    
    log_response_instru.stop();
    psychoJS.experiment.addData('adjust_keys_intru.keys', adjust_keys_intru.keys);
    if (typeof adjust_keys_intru.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('adjust_keys_intru.rt', adjust_keys_intru.rt);
        routineTimer.reset();
        }
    
    adjust_keys_intru.stop();
    // the Routine "adjustOr_instru" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _practiceStart_allKeys;
var start_practiceComponents;
function start_practiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'start_practice'-------
    t = 0;
    start_practiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    practiceStart.keys = undefined;
    practiceStart.rt = undefined;
    _practiceStart_allKeys = [];
    // keep track of which components have finished
    start_practiceComponents = [];
    start_practiceComponents.push(practice);
    start_practiceComponents.push(practiceStart);
    
    start_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function start_practiceRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'start_practice'-------
    // get current time
    t = start_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *practice* updates
    if (t >= 0.0 && practice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practice.tStart = t;  // (not accounting for frame time here)
      practice.frameNStart = frameN;  // exact frame index
      
      practice.setAutoDraw(true);
    }

    
    // *practiceStart* updates
    if (t >= 0.0 && practiceStart.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practiceStart.tStart = t;  // (not accounting for frame time here)
      practiceStart.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { practiceStart.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { practiceStart.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { practiceStart.clearEvents(); });
    }

    if (practiceStart.status === PsychoJS.Status.STARTED) {
      let theseKeys = practiceStart.getKeys({keyList: ['space'], waitRelease: false});
      _practiceStart_allKeys = _practiceStart_allKeys.concat(theseKeys);
      if (_practiceStart_allKeys.length > 0) {
        practiceStart.keys = _practiceStart_allKeys[_practiceStart_allKeys.length - 1].name;  // just the last key pressed
        practiceStart.rt = _practiceStart_allKeys[_practiceStart_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    start_practiceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function start_practiceRoutineEnd() {
  return async function () {
    //------Ending Routine 'start_practice'-------
    start_practiceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('practiceStart.keys', practiceStart.keys);
    if (typeof practiceStart.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('practiceStart.rt', practiceStart.rt);
        routineTimer.reset();
        }
    
    practiceStart.stop();
    // the Routine "start_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var delayComponents;
function delayRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'delay'-------
    t = 0;
    delayClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    delayComponents = [];
    delayComponents.push(trial_start);
    
    delayComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function delayRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'delay'-------
    // get current time
    t = delayClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *trial_start* updates
    if (t >= 0.0 && trial_start.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_start.tStart = t;  // (not accounting for frame time here)
      trial_start.frameNStart = frameN;  // exact frame index
      
      trial_start.setAutoDraw(true);
    }

    frameRemains = 2  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((trial_start.status === PsychoJS.Status.STARTED || trial_start.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      trial_start.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    delayComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function delayRoutineEnd() {
  return async function () {
    //------Ending Routine 'delay'-------
    delayComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var training_stimComponents;
function training_stimRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'training_stim'-------
    t = 0;
    training_stimClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.500000);
    // update component parameters for each repeat
    train_stim1.setOri(startOri1);
    train_stim1.setImage(image1);
    fixationCross_2.setText('+');
    train_stim2.setOri(startOri2);
    train_stim2.setImage(image2);
    // keep track of which components have finished
    training_stimComponents = [];
    training_stimComponents.push(train_stim1);
    training_stimComponents.push(fixationCross_2);
    training_stimComponents.push(train_stim2);
    training_stimComponents.push(delay_train);
    
    training_stimComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function training_stimRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'training_stim'-------
    // get current time
    t = training_stimClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *train_stim1* updates
    if (t >= 0.0 && train_stim1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      train_stim1.tStart = t;  // (not accounting for frame time here)
      train_stim1.frameNStart = frameN;  // exact frame index
      
      train_stim1.setAutoDraw(true);
    }

    frameRemains = 1.5  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((train_stim1.status === PsychoJS.Status.STARTED || train_stim1.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      train_stim1.setAutoDraw(false);
    }
    
    // *fixationCross_2* updates
    if (t >= 1.5 && fixationCross_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixationCross_2.tStart = t;  // (not accounting for frame time here)
      fixationCross_2.frameNStart = frameN;  // exact frame index
      
      fixationCross_2.setAutoDraw(true);
    }

    frameRemains = 2.5  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((fixationCross_2.status === PsychoJS.Status.STARTED || fixationCross_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      fixationCross_2.setAutoDraw(false);
    }
    
    // *train_stim2* updates
    if (t >= 2.5 && train_stim2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      train_stim2.tStart = t;  // (not accounting for frame time here)
      train_stim2.frameNStart = frameN;  // exact frame index
      
      train_stim2.setAutoDraw(true);
    }

    frameRemains = 4  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((train_stim2.status === PsychoJS.Status.STARTED || train_stim2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      train_stim2.setAutoDraw(false);
    }
    
    // *delay_train* updates
    if (t >= 4 && delay_train.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      delay_train.tStart = t;  // (not accounting for frame time here)
      delay_train.frameNStart = frameN;  // exact frame index
      
      delay_train.setAutoDraw(true);
    }

    frameRemains = 4.5  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((delay_train.status === PsychoJS.Status.STARTED || delay_train.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      delay_train.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    training_stimComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function training_stimRoutineEnd() {
  return async function () {
    //------Ending Routine 'training_stim'-------
    training_stimComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var retrocue_trainingComponents;
function retrocue_trainingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'retrocue_training'-------
    t = 0;
    retrocue_trainingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.500000);
    // update component parameters for each repeat
    retrocue_stim_2.setText(cue);
    // keep track of which components have finished
    retrocue_trainingComponents = [];
    retrocue_trainingComponents.push(retrocue_stim_2);
    retrocue_trainingComponents.push(fixationcross_2);
    retrocue_trainingComponents.push(short_delay_2);
    
    retrocue_trainingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function retrocue_trainingRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'retrocue_training'-------
    // get current time
    t = retrocue_trainingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *retrocue_stim_2* updates
    if (t >= 0.5 && retrocue_stim_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      retrocue_stim_2.tStart = t;  // (not accounting for frame time here)
      retrocue_stim_2.frameNStart = frameN;  // exact frame index
      
      retrocue_stim_2.setAutoDraw(true);
    }

    frameRemains = 0.5 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (retrocue_stim_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      retrocue_stim_2.setAutoDraw(false);
    }
    
    // *fixationcross_2* updates
    if (t >= 1.5 && fixationcross_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixationcross_2.tStart = t;  // (not accounting for frame time here)
      fixationcross_2.frameNStart = frameN;  // exact frame index
      
      fixationcross_2.setAutoDraw(true);
    }

    frameRemains = 1.5 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixationcross_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixationcross_2.setAutoDraw(false);
    }
    
    // *short_delay_2* updates
    if (t >= 0.0 && short_delay_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      short_delay_2.tStart = t;  // (not accounting for frame time here)
      short_delay_2.frameNStart = frameN;  // exact frame index
      
      short_delay_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (short_delay_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      short_delay_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    retrocue_trainingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function retrocue_trainingRoutineEnd() {
  return async function () {
    //------Ending Routine 'retrocue_training'-------
    retrocue_trainingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var kb;
var fixedOri_t1;
var test1_trial;
var start_distance_t1;
var this_ori_t1;
var _log_response_training_allKeys;
var _adjust_keys_training_allKeys;
var startTime_prac;
var training_ori_adjustmentComponents;
function training_ori_adjustmentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'training_ori_adjustment'-------
    t = 0;
    training_ori_adjustmentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    kb = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true}); 
    
    fixedOri_t1 = startOri1;
    test1_trial = 1;
    //rotation parameters
    keySpeed = 0.5;
    increasePerFrame = 0.25;
    //set the adjusmtent stimulus 
    //minimalDistance_t1 = 12.5;
    //maxOri_t1 = 347.5;
    var oriRange = [11.25, 33.75, 56.25, 78.75, 101.25, 123.75, 146.25, 168.75, 191.25, 213.75, 236.25, 258.75, 281.25, 303.75, 326.25, 348.75];
    util.shuffle(oriRange);
    start_distance_t1 = oriRange[0];
    //currentDistance_t1 = start_distance_t1;
    
    
    this_ori_t1 = start_distance_t1;
    
    training_loop.addData("start_distance_t1", start_distance_t1);
    training_loop.addData("test1_trial", test1_trial);
    log_response_training.keys = undefined;
    log_response_training.rt = undefined;
    _log_response_training_allKeys = [];
    adjust_keys_training.keys = undefined;
    adjust_keys_training.rt = undefined;
    _adjust_keys_training_allKeys = [];
    adjust_stim_training.setImage(test1);
    startTime_prac = globalClock.getTime();
    
    // keep track of which components have finished
    training_ori_adjustmentComponents = [];
    training_ori_adjustmentComponents.push(log_response_training);
    training_ori_adjustmentComponents.push(adjust_keys_training);
    training_ori_adjustmentComponents.push(adjust_stim_training);
    training_ori_adjustmentComponents.push(arrow);
    training_ori_adjustmentComponents.push(coverimage_t1_2);
    training_ori_adjustmentComponents.push(submit_t1_2);
    
    training_ori_adjustmentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var timeout_practice;
function training_ori_adjustmentRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'training_ori_adjustment'-------
    // get current time
    t = training_ori_adjustmentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    keys = adjust_keys_training.getKeys({"waitRelease": false, "clear": false});
    if ((keys.length > 0)) {
        key = keys[(keys.length - 1)];
        if ((! key.duration)) {
            keySpeed += increasePerFrame;
            if ((keySpeed > 10)) {
                keySpeed = 0.5;
            }
            if ((key.name === "left")) {
                this_ori_t1 += keySpeed;
            }
            if ((key.name === "right")) {
                this_ori_t1 -= keySpeed;
            }
        } else {
            keySpeed = 0.5;
        }
    }
    
    
    if ((Math.abs((this_ori_t1 - start_distance_t1)) >= 360)) {
        this_ori_t1 = start_distance_t1;
    } else {
        if ((Math.abs((this_ori_t1 - start_distance_t1)) <= (- 360))) {
            this_ori_t1 = start_distance_t1;
        }
    }
    
    
    // *log_response_training* updates
    if (t >= 0.0 && log_response_training.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      log_response_training.tStart = t;  // (not accounting for frame time here)
      log_response_training.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { log_response_training.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { log_response_training.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { log_response_training.clearEvents(); });
    }

    if (log_response_training.status === PsychoJS.Status.STARTED) {
      let theseKeys = log_response_training.getKeys({keyList: ['right', 'left'], waitRelease: false});
      _log_response_training_allKeys = _log_response_training_allKeys.concat(theseKeys);
      if (_log_response_training_allKeys.length > 0) {
        log_response_training.keys = _log_response_training_allKeys.map((key) => key.name);  // storing all keys
        log_response_training.rt = _log_response_training_allKeys.map((key) => key.rt);
      }
    }
    
    
    // *adjust_keys_training* updates
    if (t >= 0.0 && adjust_keys_training.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      adjust_keys_training.tStart = t;  // (not accounting for frame time here)
      adjust_keys_training.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { adjust_keys_training.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { adjust_keys_training.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { adjust_keys_training.clearEvents(); });
    }

    if (adjust_keys_training.status === PsychoJS.Status.STARTED) {
      let theseKeys = adjust_keys_training.getKeys({keyList: ['space'], waitRelease: false});
      _adjust_keys_training_allKeys = _adjust_keys_training_allKeys.concat(theseKeys);
      if (_adjust_keys_training_allKeys.length > 0) {
        adjust_keys_training.keys = _adjust_keys_training_allKeys.map((key) => key.name);  // storing all keys
        adjust_keys_training.rt = _adjust_keys_training_allKeys.map((key) => key.rt);
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *adjust_stim_training* updates
    if (t >= 0.0 && adjust_stim_training.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      adjust_stim_training.tStart = t;  // (not accounting for frame time here)
      adjust_stim_training.frameNStart = frameN;  // exact frame index
      
      adjust_stim_training.setAutoDraw(true);
    }

    
    if (adjust_stim_training.status === PsychoJS.Status.STARTED){ // only update if being drawn
      adjust_stim_training.setOri(this_ori_t1, false);
    }
    
    // *arrow* updates
    if (t >= 0.0 && arrow.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      arrow.tStart = t;  // (not accounting for frame time here)
      arrow.frameNStart = frameN;  // exact frame index
      
      arrow.setAutoDraw(true);
    }

    
    // *coverimage_t1_2* updates
    if (t >= 0.0 && coverimage_t1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      coverimage_t1_2.tStart = t;  // (not accounting for frame time here)
      coverimage_t1_2.frameNStart = frameN;  // exact frame index
      
      coverimage_t1_2.setAutoDraw(true);
    }

    frameRemains = 0.15  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((coverimage_t1_2.status === PsychoJS.Status.STARTED || coverimage_t1_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      coverimage_t1_2.setAutoDraw(false);
    }
    if (((globalClock.getTime() - startTime_prac) >= 15.15)) {
        continueRoutine = false;
        timeout_practice = "1";
        imgChoice2 = "stim/respond_faster.png";
    } else {
        timeout_practice = "0";
    }
    training_loop.addData("imgChoice2", imgChoice2);
    training_loop.addData("timeout_practice", timeout_practice);
    
    
    // *submit_t1_2* updates
    if (t >= 0.0 && submit_t1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      submit_t1_2.tStart = t;  // (not accounting for frame time here)
      submit_t1_2.frameNStart = frameN;  // exact frame index
      
      submit_t1_2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    training_ori_adjustmentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function training_ori_adjustmentRoutineEnd() {
  return async function () {
    //------Ending Routine 'training_ori_adjustment'-------
    training_ori_adjustmentComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    training_loop.addData("this_ori_t1", this_ori_t1);
    //accuracy_test1 = Math.min(Math.abs((this_ori_t1 - fixedOri_t1)), Math.abs((abs((this_ori_t1 - fixedOri_t1)) - 360)));
    //trials.addData("accuracy_test1 ", accuracy_test1);
    //trials.addData("trial_type", trial_type);
    //ori_list.append(accuracy_test1);
    
    psychoJS.experiment.addData('log_response_training.keys', log_response_training.keys);
    if (typeof log_response_training.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('log_response_training.rt', log_response_training.rt);
        }
    
    log_response_training.stop();
    psychoJS.experiment.addData('adjust_keys_training.keys', adjust_keys_training.keys);
    if (typeof adjust_keys_training.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('adjust_keys_training.rt', adjust_keys_training.rt);
        routineTimer.reset();
        }
    
    adjust_keys_training.stop();
    // the Routine "training_ori_adjustment" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var timeout_pracComponents;
function timeout_pracRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'timeout_prac'-------
    t = 0;
    timeout_pracClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.800000);
    // update component parameters for each repeat
    image.setImage(imgChoice2);
    // keep track of which components have finished
    timeout_pracComponents = [];
    timeout_pracComponents.push(image);
    
    timeout_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function timeout_pracRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'timeout_prac'-------
    // get current time
    t = timeout_pracClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    timeout_pracComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function timeout_pracRoutineEnd() {
  return async function () {
    //------Ending Routine 'timeout_prac'-------
    timeout_pracComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_3_allKeys;
var testing_startComponents;
function testing_startRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'testing_start'-------
    t = 0;
    testing_startClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    testing_startComponents = [];
    testing_startComponents.push(text);
    testing_startComponents.push(key_resp_3);
    
    testing_startComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function testing_startRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'testing_start'-------
    // get current time
    t = testing_startClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    testing_startComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function testing_startRoutineEnd() {
  return async function () {
    //------Ending Routine 'testing_start'-------
    testing_startComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "testing_start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var MyIndicesMain;
var testing_start;
var repsAC;
var numberACresults;
var break_routine;
var loop_controlComponents;
function loop_controlRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'loop_control'-------
    t = 0;
    loop_controlClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    thisBlock += 1;
    
    // Manually insert which rows have to be taken depending on the block number
    // This cannot be automated due to constraints in row selection for every iteration of the loop
    //the first block are the practice trials and the following blocks are the experiment blocks
     if ((thisBlock === 1)) {
        MyIndicesMain = "0:6";
    } else {
        if ((thisBlock === 2)) {
            MyIndicesMain = "6:20";
        } else {
            if ((thisBlock === 3)) {
                MyIndicesMain = "20:40";
            } else {
                if ((thisBlock === 4)) {
                    MyIndicesMain = "40:56";
                }
            }
        }
    }
    //After block 1 we start the testing (experiment)
    if ((thisBlock === 1)) {
        testing_start = 1;
    } else {
        testing_start = 0;
    }
    
    //After block 2 we do the attention checks
    
    if ((thisBlock === 2)) {
        repsAC = 1;
        numberACresults = 1;
    } else {
        repsAC = 0;
        numberACresults = 0;
    }
    //After block 3 we do a break
    if ((thisBlock === 3)) {
        break_routine = 1;
    } else {
        break_routine = 0;
    }
    
    trials.addData("WM_condition_file", main_task_blocks);
    // keep track of which components have finished
    loop_controlComponents = [];
    
    loop_controlComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function loop_controlRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'loop_control'-------
    // get current time
    t = loop_controlClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    loop_controlComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function loop_controlRoutineEnd() {
  return async function () {
    //------Ending Routine 'loop_control'-------
    loop_controlComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "loop_control" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trialCounterComponents;
function trialCounterRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trialCounter'-------
    t = 0;
    trialCounterClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    ntrial += 1;
    trialReal = ntrial;
    trials.addData("trialNumber", trialReal);
    
    // keep track of which components have finished
    trialCounterComponents = [];
    trialCounterComponents.push(polygon);
    
    trialCounterComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trialCounterRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trialCounter'-------
    // get current time
    t = trialCounterClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon* updates
    if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }

    frameRemains = 2  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((polygon.status === PsychoJS.Status.STARTED || polygon.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      polygon.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialCounterComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var attentionCheck;
function trialCounterRoutineEnd() {
  return async function () {
    //------Ending Routine 'trialCounter'-------
    trialCounterComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if ((ntrial === 15)) {
        attentionCheck = 1;
    } else {
        attentionCheck = 0;
    }
    
    return Scheduler.Event.NEXT;
  };
}


var presentation_stimsComponents;
function presentation_stimsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'presentation_stims'-------
    t = 0;
    presentation_stimsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.500000);
    // update component parameters for each repeat
    Stim1.setOri(startOri1);
    Stim1.setImage(image1);
    fixationCross.setText('+');
    Stim2.setOri(startOri2);
    Stim2.setImage(image2);
    // keep track of which components have finished
    presentation_stimsComponents = [];
    presentation_stimsComponents.push(Stim1);
    presentation_stimsComponents.push(fixationCross);
    presentation_stimsComponents.push(Stim2);
    presentation_stimsComponents.push(delay_1);
    
    presentation_stimsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function presentation_stimsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'presentation_stims'-------
    // get current time
    t = presentation_stimsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Stim1* updates
    if (t >= 0.0 && Stim1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Stim1.tStart = t;  // (not accounting for frame time here)
      Stim1.frameNStart = frameN;  // exact frame index
      
      Stim1.setAutoDraw(true);
    }

    frameRemains = 1.5  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((Stim1.status === PsychoJS.Status.STARTED || Stim1.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      Stim1.setAutoDraw(false);
    }
    
    // *fixationCross* updates
    if (t >= 1.5 && fixationCross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixationCross.tStart = t;  // (not accounting for frame time here)
      fixationCross.frameNStart = frameN;  // exact frame index
      
      fixationCross.setAutoDraw(true);
    }

    frameRemains = 2.5  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((fixationCross.status === PsychoJS.Status.STARTED || fixationCross.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      fixationCross.setAutoDraw(false);
    }
    
    // *Stim2* updates
    if (t >= 2.5 && Stim2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Stim2.tStart = t;  // (not accounting for frame time here)
      Stim2.frameNStart = frameN;  // exact frame index
      
      Stim2.setAutoDraw(true);
    }

    frameRemains = 4  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((Stim2.status === PsychoJS.Status.STARTED || Stim2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      Stim2.setAutoDraw(false);
    }
    
    // *delay_1* updates
    if (t >= 4 && delay_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      delay_1.tStart = t;  // (not accounting for frame time here)
      delay_1.frameNStart = frameN;  // exact frame index
      
      delay_1.setAutoDraw(true);
    }

    frameRemains = 4 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (delay_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      delay_1.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    presentation_stimsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function presentation_stimsRoutineEnd() {
  return async function () {
    //------Ending Routine 'presentation_stims'-------
    presentation_stimsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var retrocueComponents;
function retrocueRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'retrocue'-------
    t = 0;
    retrocueClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.500000);
    // update component parameters for each repeat
    retrocue_stim.setText(cue);
    // keep track of which components have finished
    retrocueComponents = [];
    retrocueComponents.push(retrocue_stim);
    retrocueComponents.push(fixationcross);
    retrocueComponents.push(short_delay);
    
    retrocueComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function retrocueRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'retrocue'-------
    // get current time
    t = retrocueClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *retrocue_stim* updates
    if (t >= 0.5 && retrocue_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      retrocue_stim.tStart = t;  // (not accounting for frame time here)
      retrocue_stim.frameNStart = frameN;  // exact frame index
      
      retrocue_stim.setAutoDraw(true);
    }

    frameRemains = 0.5 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (retrocue_stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      retrocue_stim.setAutoDraw(false);
    }
    
    // *fixationcross* updates
    if (t >= 1.5 && fixationcross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixationcross.tStart = t;  // (not accounting for frame time here)
      fixationcross.frameNStart = frameN;  // exact frame index
      
      fixationcross.setAutoDraw(true);
    }

    frameRemains = 1.5 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixationcross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixationcross.setAutoDraw(false);
    }
    
    // *short_delay* updates
    if (t >= 0.0 && short_delay.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      short_delay.tStart = t;  // (not accounting for frame time here)
      short_delay.frameNStart = frameN;  // exact frame index
      
      short_delay.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (short_delay.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      short_delay.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    retrocueComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function retrocueRoutineEnd() {
  return async function () {
    //------Ending Routine 'retrocue'-------
    retrocueComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _log_response_t1_allKeys;
var _adjust_keys_t1_allKeys;
var startTime_t1;
var adjustOr_t1Components;
function adjustOr_t1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'adjustOr_t1'-------
    t = 0;
    adjustOr_t1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    ntrial_WM += 1;
    trialReal_WM = ntrial_WM ;
    trials.addData("trialNumber_WM", trialReal_WM);
    
    kb = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true}); 
    
    fixedOri_t1 = startOri1;
    test1_trial = 1;
    //rotation parameters
    keySpeed = 0.5;
    increasePerFrame = 0.25;
    //set the adjusmtent stimulus 
    //minimalDistance_t1 = 12.5;
    //maxOri_t1 = 347.5;
    var oriRange = [11.25, 33.75, 56.25, 78.75, 101.25, 123.75, 146.25, 168.75, 191.25, 213.75, 236.25, 258.75, 281.25, 303.75, 326.25, 348.75];
    util.shuffle(oriRange);
    start_distance_t1 = oriRange[0];
    //currentDistance_t1 = start_distance_t1;
    
    
    this_ori_t1 = start_distance_t1;
    
    trials.addData("start_distance_t1", start_distance_t1);
    trials.addData("test1_trial", test1_trial);
    log_response_t1.keys = undefined;
    log_response_t1.rt = undefined;
    _log_response_t1_allKeys = [];
    adjust_stim.setImage(test1);
    adjust_keys_t1.keys = undefined;
    adjust_keys_t1.rt = undefined;
    _adjust_keys_t1_allKeys = [];
    startTime_t1 = globalClock.getTime();
    
    // keep track of which components have finished
    adjustOr_t1Components = [];
    adjustOr_t1Components.push(log_response_t1);
    adjustOr_t1Components.push(adjust_stim);
    adjustOr_t1Components.push(arrow_2);
    adjustOr_t1Components.push(adjust_keys_t1);
    adjustOr_t1Components.push(submit_t1);
    adjustOr_t1Components.push(coverimage_t1);
    
    adjustOr_t1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var timeout;
function adjustOr_t1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'adjustOr_t1'-------
    // get current time
    t = adjustOr_t1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    keys = adjust_keys_t1.getKeys({"waitRelease": false, "clear": false});
    if ((keys.length > 0)) {
        key = keys[(keys.length - 1)];
        if ((! key.duration)) {
            keySpeed += increasePerFrame;
            if ((keySpeed > 10)) {
                keySpeed = 0.5;
            }
            if ((key.name === "left")) {
                this_ori_t1 += keySpeed;
            }
            if ((key.name === "right")) {
                this_ori_t1 -= keySpeed;
            }
        } else {
            keySpeed = 0.5;
        }
    }
    
    
    if ((Math.abs((this_ori_t1 - start_distance_t1)) >= 360)) {
        this_ori_t1 = start_distance_t1;
    } else {
        if ((Math.abs((this_ori_t1 - start_distance_t1)) <= (- 360))) {
            this_ori_t1 = start_distance_t1;
        }
    }
    
    
    // *log_response_t1* updates
    if (t >= 0.0 && log_response_t1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      log_response_t1.tStart = t;  // (not accounting for frame time here)
      log_response_t1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { log_response_t1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { log_response_t1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { log_response_t1.clearEvents(); });
    }

    if (log_response_t1.status === PsychoJS.Status.STARTED) {
      let theseKeys = log_response_t1.getKeys({keyList: ['right', 'left'], waitRelease: false});
      _log_response_t1_allKeys = _log_response_t1_allKeys.concat(theseKeys);
      if (_log_response_t1_allKeys.length > 0) {
        log_response_t1.keys = _log_response_t1_allKeys.map((key) => key.name);  // storing all keys
        log_response_t1.rt = _log_response_t1_allKeys.map((key) => key.rt);
      }
    }
    
    
    // *adjust_stim* updates
    if (t >= 0.0 && adjust_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      adjust_stim.tStart = t;  // (not accounting for frame time here)
      adjust_stim.frameNStart = frameN;  // exact frame index
      
      adjust_stim.setAutoDraw(true);
    }

    
    if (adjust_stim.status === PsychoJS.Status.STARTED){ // only update if being drawn
      adjust_stim.setOri(this_ori_t1, false);
    }
    
    // *arrow_2* updates
    if (t >= 0.0 && arrow_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      arrow_2.tStart = t;  // (not accounting for frame time here)
      arrow_2.frameNStart = frameN;  // exact frame index
      
      arrow_2.setAutoDraw(true);
    }

    
    // *adjust_keys_t1* updates
    if (t >= 0.0 && adjust_keys_t1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      adjust_keys_t1.tStart = t;  // (not accounting for frame time here)
      adjust_keys_t1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { adjust_keys_t1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { adjust_keys_t1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { adjust_keys_t1.clearEvents(); });
    }

    if (adjust_keys_t1.status === PsychoJS.Status.STARTED) {
      let theseKeys = adjust_keys_t1.getKeys({keyList: ['space'], waitRelease: false});
      _adjust_keys_t1_allKeys = _adjust_keys_t1_allKeys.concat(theseKeys);
      if (_adjust_keys_t1_allKeys.length > 0) {
        adjust_keys_t1.keys = _adjust_keys_t1_allKeys.map((key) => key.name);  // storing all keys
        adjust_keys_t1.rt = _adjust_keys_t1_allKeys.map((key) => key.rt);
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *submit_t1* updates
    if (t >= 0.0 && submit_t1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      submit_t1.tStart = t;  // (not accounting for frame time here)
      submit_t1.frameNStart = frameN;  // exact frame index
      
      submit_t1.setAutoDraw(true);
    }

    
    // *coverimage_t1* updates
    if (t >= 0.0 && coverimage_t1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      coverimage_t1.tStart = t;  // (not accounting for frame time here)
      coverimage_t1.frameNStart = frameN;  // exact frame index
      
      coverimage_t1.setAutoDraw(true);
    }

    frameRemains = 0.2  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((coverimage_t1.status === PsychoJS.Status.STARTED || coverimage_t1.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      coverimage_t1.setAutoDraw(false);
    }
    if (((globalClock.getTime() - startTime_t1) >= 15.15)) {
        continueRoutine = false;
        timeout = "1";
        imgChoice1 = "stim/respond_faster.png";
    } else {
        timeout = "0";
    }
    trials_2.addData("imgChoice1", imgChoice1);
    trials_2.addData("timeout", timeout);
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    adjustOr_t1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var accuracy_test1;
function adjustOr_t1RoutineEnd() {
  return async function () {
    //------Ending Routine 'adjustOr_t1'-------
    adjustOr_t1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    trials.addData("this_ori_t1", this_ori_t1);
    accuracy_test1 = Math.min(Math.abs((this_ori_t1 - fixedOri_t1)), Math.abs((abs((this_ori_t1 - fixedOri_t1)) - 360)));
    trials.addData("accuracy_test1 ", accuracy_test1);
    trials.addData("trial_type", trial_type);
    ori_list.append(accuracy_test1);
    
    psychoJS.experiment.addData('log_response_t1.keys', log_response_t1.keys);
    if (typeof log_response_t1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('log_response_t1.rt', log_response_t1.rt);
        }
    
    log_response_t1.stop();
    psychoJS.experiment.addData('adjust_keys_t1.keys', adjust_keys_t1.keys);
    if (typeof adjust_keys_t1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('adjust_keys_t1.rt', adjust_keys_t1.rt);
        routineTimer.reset();
        }
    
    adjust_keys_t1.stop();
    // the Routine "adjustOr_t1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var timeoutComponents;
function timeoutRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'timeout'-------
    t = 0;
    timeoutClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.800000);
    // update component parameters for each repeat
    image_4.setImage(imgChoice1);
    // keep track of which components have finished
    timeoutComponents = [];
    timeoutComponents.push(image_4);
    
    timeoutComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function timeoutRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'timeout'-------
    // get current time
    t = timeoutClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_4* updates
    if (t >= 0.0 && image_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_4.tStart = t;  // (not accounting for frame time here)
      image_4.frameNStart = frameN;  // exact frame index
      
      image_4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_4.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    timeoutComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function timeoutRoutineEnd() {
  return async function () {
    //------Ending Routine 'timeout'-------
    timeoutComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var BREAKComponents;
function BREAKRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'BREAK'-------
    t = 0;
    BREAKClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    BREAKComponents = [];
    BREAKComponents.push(breakText);
    BREAKComponents.push(key_resp_2);
    
    BREAKComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function BREAKRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'BREAK'-------
    // get current time
    t = BREAKClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *breakText* updates
    if (t >= 0.0 && breakText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      breakText.tStart = t;  // (not accounting for frame time here)
      breakText.frameNStart = frameN;  // exact frame index
      
      breakText.setAutoDraw(true);
    }

    frameRemains = 120  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((breakText.status === PsychoJS.Status.STARTED || breakText.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      breakText.setAutoDraw(false);
    }
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    BREAKComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BREAKRoutineEnd() {
  return async function () {
    //------Ending Routine 'BREAK'-------
    BREAKComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "BREAK" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_respAC_prac_allKeys;
var attentionCheckComponents;
function attentionCheckRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'attentionCheck'-------
    t = 0;
    attentionCheckClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(10.000000);
    // update component parameters for each repeat
    key_respAC_prac.keys = undefined;
    key_respAC_prac.rt = undefined;
    _key_respAC_prac_allKeys = [];
    Pos1_prac.setText(Loc1);
    Pos2_prac.setText(Loc2);
    Pos3_prac.setText(Loc3);
    Pos4_prac.setText(Loc4);
    ac_stim_prac.setText(Stim);
    // keep track of which components have finished
    attentionCheckComponents = [];
    attentionCheckComponents.push(key_respAC_prac);
    attentionCheckComponents.push(Pos1_prac);
    attentionCheckComponents.push(Pos2_prac);
    attentionCheckComponents.push(Pos3_prac);
    attentionCheckComponents.push(Pos4_prac);
    attentionCheckComponents.push(taskAC_prac);
    attentionCheckComponents.push(ac_stim_prac);
    
    attentionCheckComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function attentionCheckRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'attentionCheck'-------
    // get current time
    t = attentionCheckClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_respAC_prac* updates
    if (t >= 0.0 && key_respAC_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_respAC_prac.tStart = t;  // (not accounting for frame time here)
      key_respAC_prac.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_respAC_prac.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_respAC_prac.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_respAC_prac.clearEvents(); });
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_respAC_prac.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_respAC_prac.status = PsychoJS.Status.FINISHED;
  }

    if (key_respAC_prac.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_respAC_prac.getKeys({keyList: ['up', 'down', 'left', 'right'], waitRelease: false});
      _key_respAC_prac_allKeys = _key_respAC_prac_allKeys.concat(theseKeys);
      if (_key_respAC_prac_allKeys.length > 0) {
        key_respAC_prac.keys = _key_respAC_prac_allKeys[0].name;  // just the first key pressed
        key_respAC_prac.rt = _key_respAC_prac_allKeys[0].rt;
        // was this correct?
        if (key_respAC_prac.keys == CorrAns) {
            key_respAC_prac.corr = 1;
        } else {
            key_respAC_prac.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *Pos1_prac* updates
    if (t >= 0.0 && Pos1_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pos1_prac.tStart = t;  // (not accounting for frame time here)
      Pos1_prac.frameNStart = frameN;  // exact frame index
      
      Pos1_prac.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Pos1_prac.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Pos1_prac.setAutoDraw(false);
    }
    
    // *Pos2_prac* updates
    if (t >= 0.0 && Pos2_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pos2_prac.tStart = t;  // (not accounting for frame time here)
      Pos2_prac.frameNStart = frameN;  // exact frame index
      
      Pos2_prac.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Pos2_prac.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Pos2_prac.setAutoDraw(false);
    }
    
    // *Pos3_prac* updates
    if (t >= 0.0 && Pos3_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pos3_prac.tStart = t;  // (not accounting for frame time here)
      Pos3_prac.frameNStart = frameN;  // exact frame index
      
      Pos3_prac.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Pos3_prac.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Pos3_prac.setAutoDraw(false);
    }
    
    // *Pos4_prac* updates
    if (t >= 0.0 && Pos4_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pos4_prac.tStart = t;  // (not accounting for frame time here)
      Pos4_prac.frameNStart = frameN;  // exact frame index
      
      Pos4_prac.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Pos4_prac.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Pos4_prac.setAutoDraw(false);
    }
    
    // *taskAC_prac* updates
    if (t >= 0.0 && taskAC_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      taskAC_prac.tStart = t;  // (not accounting for frame time here)
      taskAC_prac.frameNStart = frameN;  // exact frame index
      
      taskAC_prac.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (taskAC_prac.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      taskAC_prac.setAutoDraw(false);
    }
    
    // *ac_stim_prac* updates
    if (t >= 0.0 && ac_stim_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ac_stim_prac.tStart = t;  // (not accounting for frame time here)
      ac_stim_prac.frameNStart = frameN;  // exact frame index
      
      ac_stim_prac.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ac_stim_prac.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ac_stim_prac.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    attentionCheckComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function attentionCheckRoutineEnd() {
  return async function () {
    //------Ending Routine 'attentionCheck'-------
    attentionCheckComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    if (key_respAC_prac.corr) {
        AC_acc = 1;
        hits_in_attention2 += 1;
    } else {
        AC_acc = 0;
    }
    psychoJS.experiment.addData("AC_acc", AC_acc);
    
    // was no response the correct answer?!
    if (key_respAC_prac.keys === undefined) {
      if (['None','none',undefined].includes(CorrAns)) {
         key_respAC_prac.corr = 1;  // correct non-response
      } else {
         key_respAC_prac.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('key_respAC_prac.keys', key_respAC_prac.keys);
    psychoJS.experiment.addData('key_respAC_prac.corr', key_respAC_prac.corr);
    if (typeof key_respAC_prac.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_respAC_prac.rt', key_respAC_prac.rt);
        routineTimer.reset();
        }
    
    key_respAC_prac.stop();
    return Scheduler.Event.NEXT;
  };
}


var check_AC_acc_2;
var _pressToEndExp_allKeys;
var continueOrEndComponents;
function continueOrEndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'continueOrEnd'-------
    t = 0;
    continueOrEndClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    check_AC_acc_2 = (Number.parseFloat(hits_in_attention2) / 8.0);
    if ((check_AC_acc_2 < 0.5)) {
        msgEndExperiment = "Your accuracy in the attention checks was too low. \n\n\nYou have reached the end of the experiment. \nPress the space to quit the experiment. Thank you!";
        numberQuits2 = 1;
    } else {
        msgEndExperiment = "You have passed the attention checks. \n\n\nPress space to continue the experiment.";
        numberQuits2 = 0;
    }
    
    textEndExperiment.setText(msgEndExperiment);
    pressToEndExp.keys = undefined;
    pressToEndExp.rt = undefined;
    _pressToEndExp_allKeys = [];
    // keep track of which components have finished
    continueOrEndComponents = [];
    continueOrEndComponents.push(textEndExperiment);
    continueOrEndComponents.push(pressToEndExp);
    
    continueOrEndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function continueOrEndRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'continueOrEnd'-------
    // get current time
    t = continueOrEndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textEndExperiment* updates
    if (t >= 0.0 && textEndExperiment.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textEndExperiment.tStart = t;  // (not accounting for frame time here)
      textEndExperiment.frameNStart = frameN;  // exact frame index
      
      textEndExperiment.setAutoDraw(true);
    }

    
    // *pressToEndExp* updates
    if (t >= 0.0 && pressToEndExp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pressToEndExp.tStart = t;  // (not accounting for frame time here)
      pressToEndExp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { pressToEndExp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { pressToEndExp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { pressToEndExp.clearEvents(); });
    }

    if (pressToEndExp.status === PsychoJS.Status.STARTED) {
      let theseKeys = pressToEndExp.getKeys({keyList: ['space'], waitRelease: false});
      _pressToEndExp_allKeys = _pressToEndExp_allKeys.concat(theseKeys);
      if (_pressToEndExp_allKeys.length > 0) {
        pressToEndExp.keys = _pressToEndExp_allKeys[_pressToEndExp_allKeys.length - 1].name;  // just the last key pressed
        pressToEndExp.rt = _pressToEndExp_allKeys[_pressToEndExp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    continueOrEndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function continueOrEndRoutineEnd() {
  return async function () {
    //------Ending Routine 'continueOrEnd'-------
    continueOrEndComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    pressToEndExp.stop();
    // the Routine "continueOrEnd" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var quit_expComponents;
function quit_expRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'quit_exp'-------
    t = 0;
    quit_expClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.quit();
    // keep track of which components have finished
    quit_expComponents = [];
    
    quit_expComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function quit_expRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'quit_exp'-------
    // get current time
    t = quit_expClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    quit_expComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function quit_expRoutineEnd() {
  return async function () {
    //------Ending Routine 'quit_exp'-------
    quit_expComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "quit_exp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _keyStart_distraction_allKeys;
var start_distractionComponents;
function start_distractionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'start_distraction'-------
    t = 0;
    start_distractionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    keyStart_distraction.keys = undefined;
    keyStart_distraction.rt = undefined;
    _keyStart_distraction_allKeys = [];
    // keep track of which components have finished
    start_distractionComponents = [];
    start_distractionComponents.push(StartDistraction);
    start_distractionComponents.push(keyStart_distraction);
    
    start_distractionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function start_distractionRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'start_distraction'-------
    // get current time
    t = start_distractionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *StartDistraction* updates
    if (t >= 0.0 && StartDistraction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      StartDistraction.tStart = t;  // (not accounting for frame time here)
      StartDistraction.frameNStart = frameN;  // exact frame index
      
      StartDistraction.setAutoDraw(true);
    }

    
    // *keyStart_distraction* updates
    if (t >= 0.0 && keyStart_distraction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyStart_distraction.tStart = t;  // (not accounting for frame time here)
      keyStart_distraction.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyStart_distraction.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyStart_distraction.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyStart_distraction.clearEvents(); });
    }

    if (keyStart_distraction.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyStart_distraction.getKeys({keyList: ['left', 'right', 'space'], waitRelease: false});
      _keyStart_distraction_allKeys = _keyStart_distraction_allKeys.concat(theseKeys);
      if (_keyStart_distraction_allKeys.length > 0) {
        keyStart_distraction.keys = _keyStart_distraction_allKeys[_keyStart_distraction_allKeys.length - 1].name;  // just the last key pressed
        keyStart_distraction.rt = _keyStart_distraction_allKeys[_keyStart_distraction_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    start_distractionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function start_distractionRoutineEnd() {
  return async function () {
    //------Ending Routine 'start_distraction'-------
    start_distractionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('keyStart_distraction.keys', keyStart_distraction.keys);
    if (typeof keyStart_distraction.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyStart_distraction.rt', keyStart_distraction.rt);
        routineTimer.reset();
        }
    
    keyStart_distraction.stop();
    // the Routine "start_distraction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var startTime;
var timeComponents;
function timeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'time'-------
    t = 0;
    timeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((disTrials.thisN === 0)) {
        startTime = globalClock.getTime();
    }
    
    // keep track of which components have finished
    timeComponents = [];
    
    timeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function timeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'time'-------
    // get current time
    t = timeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (((globalClock.getTime() - startTime) >= 60)) {
        disTrials.finished = true;
        continueRoutine = false;
    }
    
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    timeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function timeRoutineEnd() {
  return async function () {
    //------Ending Routine 'time'-------
    timeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "time" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _dis_log_allKeys;
var distractionComponents;
function distractionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'distraction'-------
    t = 0;
    distractionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    textbox.refresh();
    
    textbox.setText('');
    textbox.setText('');
    dis_question.setText(question);
    dis_log.keys = undefined;
    dis_log.rt = undefined;
    _dis_log_allKeys = [];
    // keep track of which components have finished
    distractionComponents = [];
    distractionComponents.push(textbox);
    distractionComponents.push(dis_question);
    distractionComponents.push(dis_log);
    distractionComponents.push(dis_text);
    distractionComponents.push(submit_button2_2);
    
    distractionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var response;
function distractionRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'distraction'-------
    // get current time
    t = distractionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    response = textbox.text;
    
    
    
    // *textbox* updates
    if (t >= 0.0 && textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox.tStart = t;  // (not accounting for frame time here)
      textbox.frameNStart = frameN;  // exact frame index
      
      textbox.setAutoDraw(true);
    }

    
    // *dis_question* updates
    if (t >= 0.0 && dis_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dis_question.tStart = t;  // (not accounting for frame time here)
      dis_question.frameNStart = frameN;  // exact frame index
      
      dis_question.setAutoDraw(true);
    }

    
    // *dis_log* updates
    if (t >= 0.0 && dis_log.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dis_log.tStart = t;  // (not accounting for frame time here)
      dis_log.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { dis_log.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { dis_log.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { dis_log.clearEvents(); });
    }

    if (dis_log.status === PsychoJS.Status.STARTED) {
      let theseKeys = dis_log.getKeys({keyList: ['space'], waitRelease: false});
      _dis_log_allKeys = _dis_log_allKeys.concat(theseKeys);
      if (_dis_log_allKeys.length > 0) {
        dis_log.keys = _dis_log_allKeys[_dis_log_allKeys.length - 1].name;  // just the last key pressed
        dis_log.rt = _dis_log_allKeys[_dis_log_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *dis_text* updates
    if (t >= 0.0 && dis_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dis_text.tStart = t;  // (not accounting for frame time here)
      dis_text.frameNStart = frameN;  // exact frame index
      
      dis_text.setAutoDraw(true);
    }

    
    // *submit_button2_2* updates
    if (t >= 0.0 && submit_button2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      submit_button2_2.tStart = t;  // (not accounting for frame time here)
      submit_button2_2.frameNStart = frameN;  // exact frame index
      
      submit_button2_2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    distractionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function distractionRoutineEnd() {
  return async function () {
    //------Ending Routine 'distraction'-------
    distractionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData("typedResponse", response);
    
    psychoJS.experiment.addData('textbox.text',textbox.text)
    psychoJS.experiment.addData('dis_log.keys', dis_log.keys);
    if (typeof dis_log.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('dis_log.rt', dis_log.rt);
        routineTimer.reset();
        }
    
    dis_log.stop();
    // the Routine "distraction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var feedback_disComponents;
function feedback_disRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'feedback_dis'-------
    t = 0;
    feedback_disClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    text_14.setText(corrAns);
    // keep track of which components have finished
    feedback_disComponents = [];
    feedback_disComponents.push(text_14);
    
    feedback_disComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function feedback_disRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'feedback_dis'-------
    // get current time
    t = feedback_disClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_14* updates
    if (t >= 0.0 && text_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_14.tStart = t;  // (not accounting for frame time here)
      text_14.frameNStart = frameN;  // exact frame index
      
      text_14.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_14.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_14.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedback_disComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback_disRoutineEnd() {
  return async function () {
    //------Ending Routine 'feedback_dis'-------
    feedback_disComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    /* Syntax Error: Fix Python code */
    return Scheduler.Event.NEXT;
  };
}


var _keyStart_LTM_allKeys;
var start_LTMComponents;
function start_LTMRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'start_LTM'-------
    t = 0;
    start_LTMClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    keyStart_LTM.keys = undefined;
    keyStart_LTM.rt = undefined;
    _keyStart_LTM_allKeys = [];
    // keep track of which components have finished
    start_LTMComponents = [];
    start_LTMComponents.push(StartLTM);
    start_LTMComponents.push(keyStart_LTM);
    
    start_LTMComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function start_LTMRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'start_LTM'-------
    // get current time
    t = start_LTMClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *StartLTM* updates
    if (t >= 0.0 && StartLTM.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      StartLTM.tStart = t;  // (not accounting for frame time here)
      StartLTM.frameNStart = frameN;  // exact frame index
      
      StartLTM.setAutoDraw(true);
    }

    
    // *keyStart_LTM* updates
    if (t >= 0.0 && keyStart_LTM.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyStart_LTM.tStart = t;  // (not accounting for frame time here)
      keyStart_LTM.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyStart_LTM.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyStart_LTM.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyStart_LTM.clearEvents(); });
    }

    if (keyStart_LTM.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyStart_LTM.getKeys({keyList: ['left', 'right', 'space'], waitRelease: false});
      _keyStart_LTM_allKeys = _keyStart_LTM_allKeys.concat(theseKeys);
      if (_keyStart_LTM_allKeys.length > 0) {
        keyStart_LTM.keys = _keyStart_LTM_allKeys[_keyStart_LTM_allKeys.length - 1].name;  // just the last key pressed
        keyStart_LTM.rt = _keyStart_LTM_allKeys[_keyStart_LTM_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    start_LTMComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function start_LTMRoutineEnd() {
  return async function () {
    //------Ending Routine 'start_LTM'-------
    start_LTMComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('keyStart_LTM.keys', keyStart_LTM.keys);
    if (typeof keyStart_LTM.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyStart_LTM.rt', keyStart_LTM.rt);
        routineTimer.reset();
        }
    
    keyStart_LTM.stop();
    // the Routine "start_LTM" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var loop_control_ltmComponents;
function loop_control_ltmRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'loop_control_ltm'-------
    t = 0;
    loop_control_ltmClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    LTMtrial.addData("ltm_task_blocks", ltm_task_blocks);
    // keep track of which components have finished
    loop_control_ltmComponents = [];
    
    loop_control_ltmComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function loop_control_ltmRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'loop_control_ltm'-------
    // get current time
    t = loop_control_ltmClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    loop_control_ltmComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function loop_control_ltmRoutineEnd() {
  return async function () {
    //------Ending Routine 'loop_control_ltm'-------
    loop_control_ltmComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "loop_control_ltm" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trialReal_ltm;
var fixationcross2Components;
function fixationcross2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'fixationcross2'-------
    t = 0;
    fixationcross2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    ntrial += 1;
    trialReal_ltm = ntrial;
    //psychoJS.experiment.addData("trialNumber_WM", trialReal);
    LTMtrial.addData("trialNumber_LTM", trialReal_ltm);
    fixationcross3.setText('+');
    // keep track of which components have finished
    fixationcross2Components = [];
    fixationcross2Components.push(fixationcross3);
    
    fixationcross2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function fixationcross2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'fixationcross2'-------
    // get current time
    t = fixationcross2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Change opacity of fixation cross when key is pressed 
    //if ((key_resp.keys !== undefined)) {
        //crossDisappear_Main = 0;
    //}
    
    
    // *fixationcross3* updates
    if (t >= 0.0 && fixationcross3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixationcross3.tStart = t;  // (not accounting for frame time here)
      fixationcross3.frameNStart = frameN;  // exact frame index
      
      fixationcross3.setAutoDraw(true);
    }

    frameRemains = 1.5  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((fixationcross3.status === PsychoJS.Status.STARTED || fixationcross3.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      fixationcross3.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    fixationcross2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixationcross2RoutineEnd() {
  return async function () {
    //------Ending Routine 'fixationcross2'-------
    fixationcross2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var ltm_trial;
var fixedOri_ltm;
var minimalDistance_ltm;
var maxOri_ltm;
var start_distance_ltm;
var this_ori_ltm;
var _log_responseLTM_allKeys;
var _adjust_keys_LTM_allKeys;
var startTime_ltm;
var LTM_testComponents;
function LTM_testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'LTM_test'-------
    t = 0;
    LTM_testClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    kb = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true}); 
    ltm_trial = trial_type;
    fixedOri_ltm = startOri_ltm;
    
    //rotation parameters
    keySpeed = 0.5;
    increasePerFrame = 0.25;
    //set the adjusmtent stimulus 
    minimalDistance_ltm = 12.5;
    maxOri_ltm = 347.5;
    
    var oriRange_ltm = [11.25, 33.75, 56.25, 78.75, 101.25, 123.75, 146.25, 168.75, 191.25, 213.75, 236.25, 258.75, 281.25, 303.75, 326.25, 348.75];
    util.shuffle(oriRange_ltm);
    start_distance_ltm = oriRange_ltm[0];
    
    this_ori_ltm = start_distance_ltm;
    
    LTMtrial.addData("start_distance_ltm", start_distance_ltm);
    LTMtrial.addData("fixedOri_ltm",fixedOri_ltm);
    
    LTMtrial.addData("ltm_trial", ltm_trial);
    log_responseLTM.keys = undefined;
    log_responseLTM.rt = undefined;
    _log_responseLTM_allKeys = [];
    adjust_stim_LTM.setImage(ltm_image);
    adjust_keys_LTM.keys = undefined;
    adjust_keys_LTM.rt = undefined;
    _adjust_keys_LTM_allKeys = [];
    startTime_ltm = globalClock.getTime();
    
    // keep track of which components have finished
    LTM_testComponents = [];
    LTM_testComponents.push(log_responseLTM);
    LTM_testComponents.push(contextStim_LTM);
    LTM_testComponents.push(adjust_stim_LTM);
    LTM_testComponents.push(arrow_4);
    LTM_testComponents.push(adjust_keys_LTM);
    LTM_testComponents.push(CoverImage_LTM);
    LTM_testComponents.push(submit_t1_3);
    
    LTM_testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var timeout_ltm;
function LTM_testRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'LTM_test'-------
    // get current time
    t = LTM_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    keys = adjust_keys_LTM.getKeys({"waitRelease": false, "clear": false});
    if ((keys.length > 0)) {
        key = keys[(keys.length - 1)];
        if ((! key.duration)) {
            keySpeed += increasePerFrame;
            if ((keySpeed > 10)) {
                keySpeed = 0.5;
            }
            if ((key.name === "left")) {
                this_ori_ltm += keySpeed;
            }
            if ((key.name === "right")) {
                this_ori_ltm -= keySpeed;
            }
        } else {
            keySpeed = 0.5;
        }
    }
    
    
    
    if ((Math.abs((this_ori_ltm - start_distance_ltm)) >= 360)) {
        this_ori_ltm = start_distance_ltm;
    } else {
        if ((Math.abs((this_ori_ltm - start_distance_ltm)) <= (- 360))) {
        this_ori_ltm  = start_distance_ltm;
        }
    }
    
    
    // *log_responseLTM* updates
    if (t >= 0.0 && log_responseLTM.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      log_responseLTM.tStart = t;  // (not accounting for frame time here)
      log_responseLTM.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { log_responseLTM.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { log_responseLTM.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { log_responseLTM.clearEvents(); });
    }

    if (log_responseLTM.status === PsychoJS.Status.STARTED) {
      let theseKeys = log_responseLTM.getKeys({keyList: ['right', 'left'], waitRelease: false});
      _log_responseLTM_allKeys = _log_responseLTM_allKeys.concat(theseKeys);
      if (_log_responseLTM_allKeys.length > 0) {
        log_responseLTM.keys = _log_responseLTM_allKeys.map((key) => key.name);  // storing all keys
        log_responseLTM.rt = _log_responseLTM_allKeys.map((key) => key.rt);
      }
    }
    
    
    // *contextStim_LTM* updates
    if (t >= 0.0 && contextStim_LTM.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      contextStim_LTM.tStart = t;  // (not accounting for frame time here)
      contextStim_LTM.frameNStart = frameN;  // exact frame index
      
      contextStim_LTM.setAutoDraw(true);
    }

    
    // *adjust_stim_LTM* updates
    if (t >= 0.0 && adjust_stim_LTM.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      adjust_stim_LTM.tStart = t;  // (not accounting for frame time here)
      adjust_stim_LTM.frameNStart = frameN;  // exact frame index
      
      adjust_stim_LTM.setAutoDraw(true);
    }

    
    if (adjust_stim_LTM.status === PsychoJS.Status.STARTED){ // only update if being drawn
      adjust_stim_LTM.setOri(this_ori_ltm, false);
    }
    
    // *arrow_4* updates
    if (t >= 0.0 && arrow_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      arrow_4.tStart = t;  // (not accounting for frame time here)
      arrow_4.frameNStart = frameN;  // exact frame index
      
      arrow_4.setAutoDraw(true);
    }

    
    // *adjust_keys_LTM* updates
    if (t >= 0.0 && adjust_keys_LTM.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      adjust_keys_LTM.tStart = t;  // (not accounting for frame time here)
      adjust_keys_LTM.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { adjust_keys_LTM.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { adjust_keys_LTM.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { adjust_keys_LTM.clearEvents(); });
    }

    if (adjust_keys_LTM.status === PsychoJS.Status.STARTED) {
      let theseKeys = adjust_keys_LTM.getKeys({keyList: ['space'], waitRelease: false});
      _adjust_keys_LTM_allKeys = _adjust_keys_LTM_allKeys.concat(theseKeys);
      if (_adjust_keys_LTM_allKeys.length > 0) {
        adjust_keys_LTM.keys = _adjust_keys_LTM_allKeys.map((key) => key.name);  // storing all keys
        adjust_keys_LTM.rt = _adjust_keys_LTM_allKeys.map((key) => key.rt);
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *CoverImage_LTM* updates
    if (t >= 0.0 && CoverImage_LTM.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      CoverImage_LTM.tStart = t;  // (not accounting for frame time here)
      CoverImage_LTM.frameNStart = frameN;  // exact frame index
      
      CoverImage_LTM.setAutoDraw(true);
    }

    frameRemains = 0.2  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((CoverImage_LTM.status === PsychoJS.Status.STARTED || CoverImage_LTM.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      CoverImage_LTM.setAutoDraw(false);
    }
    if (((globalClock.getTime() - startTime_ltm) >= 15.15)) {
        continueRoutine = false;
        timeout_ltm = "1";
        imgChoice3 = "stim/respond_faster.png";
    } else {
        timeout_ltm = "0";
    }
    LTMtrial.addData("imgChoice3", imgChoice3);
    LTMtrial.addData("timeout_ltm", timeout_ltm);
    
    
    // *submit_t1_3* updates
    if (t >= 0.0 && submit_t1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      submit_t1_3.tStart = t;  // (not accounting for frame time here)
      submit_t1_3.frameNStart = frameN;  // exact frame index
      
      submit_t1_3.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    LTM_testComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var accuracy_ltm;
function LTM_testRoutineEnd() {
  return async function () {
    //------Ending Routine 'LTM_test'-------
    LTM_testComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    LTMtrial.addData("this_ori_ltm", this_ori_ltm);
    accuracy_ltm = Math.min(Math.abs((this_ori_ltm - fixedOri_ltm)), Math.abs((abs((this_ori_ltm - fixedOri_ltm)) - 360)));
    LTMtrial.addData("accuracy_ltm", accuracy_ltm);
    //ori_list.append(accuracy);
    psychoJS.experiment.addData('log_responseLTM.keys', log_responseLTM.keys);
    if (typeof log_responseLTM.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('log_responseLTM.rt', log_responseLTM.rt);
        }
    
    log_responseLTM.stop();
    psychoJS.experiment.addData('adjust_keys_LTM.keys', adjust_keys_LTM.keys);
    if (typeof adjust_keys_LTM.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('adjust_keys_LTM.rt', adjust_keys_LTM.rt);
        routineTimer.reset();
        }
    
    adjust_keys_LTM.stop();
    // the Routine "LTM_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var timeout_LTMComponents;
function timeout_LTMRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'timeout_LTM'-------
    t = 0;
    timeout_LTMClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.800000);
    // update component parameters for each repeat
    image_2.setImage(imgChoice3);
    // keep track of which components have finished
    timeout_LTMComponents = [];
    timeout_LTMComponents.push(image_2);
    
    timeout_LTMComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function timeout_LTMRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'timeout_LTM'-------
    // get current time
    t = timeout_LTMClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    timeout_LTMComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function timeout_LTMRoutineEnd() {
  return async function () {
    //------Ending Routine 'timeout_LTM'-------
    timeout_LTMComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var sampled_accuracies;
var _key_bonus_allKeys;
var bonusComponents;
function bonusRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'bonus'-------
    t = 0;
    bonusClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(10.000000);
    // update component parameters for each repeat
    util.shuffle(ori_list);
    sampled_accuracies = ori_list[0];
    if ((sampled_accuracies < 91)) {
        msgBonus = "CONGRATULATIONS! The randomly picked responses were correct. You will receive the BONUS!\n\nPlease press the space button to continue to the last part of this task in which we kindly ask you to provide some feedback.";
        get_bonus = 1;
        psychoJS.experiment.addData("Bonus", get_bonus);
    } else {
        msgBonus = "CONGRATULATIONS! The randomly picked responses were correct. You will receive the BONUS!\n\nPlease press the space button to continue to the last part of this task in which we kindly ask you to provide some feedback.";
        get_bonus = 0;
        psychoJS.experiment.addData("Bonus", get_bonus);
    }
    
    presentBonus.setText(msgBonus);
    key_bonus.keys = undefined;
    key_bonus.rt = undefined;
    _key_bonus_allKeys = [];
    // keep track of which components have finished
    bonusComponents = [];
    bonusComponents.push(presentBonus);
    bonusComponents.push(key_bonus);
    
    bonusComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function bonusRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'bonus'-------
    // get current time
    t = bonusClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *presentBonus* updates
    if (t >= 0 && presentBonus.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      presentBonus.tStart = t;  // (not accounting for frame time here)
      presentBonus.frameNStart = frameN;  // exact frame index
      
      presentBonus.setAutoDraw(true);
    }

    frameRemains = 0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (presentBonus.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      presentBonus.setAutoDraw(false);
    }
    
    // *key_bonus* updates
    if (t >= 0.0 && key_bonus.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_bonus.tStart = t;  // (not accounting for frame time here)
      key_bonus.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_bonus.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_bonus.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_bonus.clearEvents(); });
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_bonus.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_bonus.status = PsychoJS.Status.FINISHED;
  }

    if (key_bonus.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_bonus.getKeys({keyList: ['space'], waitRelease: false});
      _key_bonus_allKeys = _key_bonus_allKeys.concat(theseKeys);
      if (_key_bonus_allKeys.length > 0) {
        key_bonus.keys = _key_bonus_allKeys[_key_bonus_allKeys.length - 1].name;  // just the last key pressed
        key_bonus.rt = _key_bonus_allKeys[_key_bonus_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    bonusComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function bonusRoutineEnd() {
  return async function () {
    //------Ending Routine 'bonus'-------
    bonusComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_bonus.keys', key_bonus.keys);
    if (typeof key_bonus.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_bonus.rt', key_bonus.rt);
        routineTimer.reset();
        }
    
    key_bonus.stop();
    return Scheduler.Event.NEXT;
  };
}


var _exp_feedback_log_allKeys;
var feedback_expComponents;
function feedback_expRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'feedback_exp'-------
    t = 0;
    feedback_expClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    textbox.refresh();
    
    textbox_exp_feedback.setText('');
    textbox_exp_feedback.setText('');
    exp_feedback_log.keys = undefined;
    exp_feedback_log.rt = undefined;
    _exp_feedback_log_allKeys = [];
    // keep track of which components have finished
    feedback_expComponents = [];
    feedback_expComponents.push(textbox_exp_feedback);
    feedback_expComponents.push(exp_feedback_log);
    feedback_expComponents.push(dis_text_2);
    feedback_expComponents.push(submit_button2);
    
    feedback_expComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var feedback;
function feedback_expRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'feedback_exp'-------
    // get current time
    t = feedback_expClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    feedback = textbox.text;
    
    
    // *textbox_exp_feedback* updates
    if (t >= 0.0 && textbox_exp_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_exp_feedback.tStart = t;  // (not accounting for frame time here)
      textbox_exp_feedback.frameNStart = frameN;  // exact frame index
      
      textbox_exp_feedback.setAutoDraw(true);
    }

    
    // *exp_feedback_log* updates
    if (t >= 0.0 && exp_feedback_log.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      exp_feedback_log.tStart = t;  // (not accounting for frame time here)
      exp_feedback_log.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { exp_feedback_log.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { exp_feedback_log.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { exp_feedback_log.clearEvents(); });
    }

    if (exp_feedback_log.status === PsychoJS.Status.STARTED) {
      let theseKeys = exp_feedback_log.getKeys({keyList: ['right', 'enter'], waitRelease: false});
      _exp_feedback_log_allKeys = _exp_feedback_log_allKeys.concat(theseKeys);
      if (_exp_feedback_log_allKeys.length > 0) {
        exp_feedback_log.keys = _exp_feedback_log_allKeys.map((key) => key.name);  // storing all keys
        exp_feedback_log.rt = _exp_feedback_log_allKeys.map((key) => key.rt);
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *dis_text_2* updates
    if (t >= 0.0 && dis_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dis_text_2.tStart = t;  // (not accounting for frame time here)
      dis_text_2.frameNStart = frameN;  // exact frame index
      
      dis_text_2.setAutoDraw(true);
    }

    
    // *submit_button2* updates
    if (t >= 0.0 && submit_button2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      submit_button2.tStart = t;  // (not accounting for frame time here)
      submit_button2.frameNStart = frameN;  // exact frame index
      
      submit_button2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedback_expComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedback_expRoutineEnd() {
  return async function () {
    //------Ending Routine 'feedback_exp'-------
    feedback_expComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData("exp_feedback", feedback);
    
    psychoJS.experiment.addData('textbox_exp_feedback.text',textbox_exp_feedback.text)
    psychoJS.experiment.addData('exp_feedback_log.keys', exp_feedback_log.keys);
    if (typeof exp_feedback_log.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('exp_feedback_log.rt', exp_feedback_log.rt);
        routineTimer.reset();
        }
    
    exp_feedback_log.stop();
    // the Routine "feedback_exp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _the_end_exp_allKeys;
var theEndComponents;
function theEndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'theEnd'-------
    t = 0;
    theEndClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the mouse_2
    gotValidClick = false; // until a click is received
    the_end_exp.keys = undefined;
    the_end_exp.rt = undefined;
    _the_end_exp_allKeys = [];
    // keep track of which components have finished
    theEndComponents = [];
    theEndComponents.push(mouse_2);
    theEndComponents.push(the_end);
    theEndComponents.push(the_end_exp);
    theEndComponents.push(redirection_prolific);
    
    theEndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function theEndRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'theEnd'-------
    // get current time
    t = theEndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *the_end* updates
    if (t >= 0.0 && the_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      the_end.tStart = t;  // (not accounting for frame time here)
      the_end.frameNStart = frameN;  // exact frame index
      
      the_end.setAutoDraw(true);
    }

    
    // *the_end_exp* updates
    if (t >= 0.0 && the_end_exp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      the_end_exp.tStart = t;  // (not accounting for frame time here)
      the_end_exp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { the_end_exp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { the_end_exp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { the_end_exp.clearEvents(); });
    }

    if (the_end_exp.status === PsychoJS.Status.STARTED) {
      let theseKeys = the_end_exp.getKeys({keyList: ['space', 'Escape'], waitRelease: false});
      _the_end_exp_allKeys = _the_end_exp_allKeys.concat(theseKeys);
      if (_the_end_exp_allKeys.length > 0) {
        the_end_exp.keys = _the_end_exp_allKeys.map((key) => key.name);  // storing all keys
        the_end_exp.rt = _the_end_exp_allKeys.map((key) => key.rt);
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *redirection_prolific* updates
    if (t >= 0.0 && redirection_prolific.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      redirection_prolific.tStart = t;  // (not accounting for frame time here)
      redirection_prolific.frameNStart = frameN;  // exact frame index
      
      redirection_prolific.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    theEndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function theEndRoutineEnd() {
  return async function () {
    //------Ending Routine 'theEnd'-------
    theEndComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('the_end_exp.keys', the_end_exp.keys);
    if (typeof the_end_exp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('the_end_exp.rt', the_end_exp.rt);
        routineTimer.reset();
        }
    
    the_end_exp.stop();
    // the Routine "theEnd" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}

/******************************** 
 * Demo_Task_Continous_Ori Test *
 ********************************/

import { core, data, sound, util, visual } from './lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'demo_task_continous_ori';  // from the Builder filename that created this script
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
    {'name': 'conditions/conditions_ltm_108.xlsx', 'path': 'conditions/conditions_ltm_108.xlsx'},
    {'name': 'conditions/conditions_124.xlsx', 'path': 'conditions/conditions_124.xlsx'},
    {'name': 'conditions/conditions_161.xlsx', 'path': 'conditions/conditions_161.xlsx'},
    {'name': 'stimuli/snowglobe.png', 'path': 'stimuli/snowglobe.png'},
    {'name': 'conditions/conditions_ltm_17.xlsx', 'path': 'conditions/conditions_ltm_17.xlsx'},
    {'name': 'conditions/conditions_ltm_166.xlsx', 'path': 'conditions/conditions_ltm_166.xlsx'},
    {'name': 'stimuli/cellphone.png', 'path': 'stimuli/cellphone.png'},
    {'name': 'stimuli/jeep.png', 'path': 'stimuli/jeep.png'},
    {'name': 'conditions/conditions_ltm_156.xlsx', 'path': 'conditions/conditions_ltm_156.xlsx'},
    {'name': 'conditions/conditions_112.xlsx', 'path': 'conditions/conditions_112.xlsx'},
    {'name': 'conditions/conditions_ltm_10.xlsx', 'path': 'conditions/conditions_ltm_10.xlsx'},
    {'name': 'conditions/conditions_ltm_181.xlsx', 'path': 'conditions/conditions_ltm_181.xlsx'},
    {'name': 'conditions/conditions_ltm_115.xlsx', 'path': 'conditions/conditions_ltm_115.xlsx'},
    {'name': 'stimuli/saintbernard.png', 'path': 'stimuli/saintbernard.png'},
    {'name': 'conditions/conditions_186.xlsx', 'path': 'conditions/conditions_186.xlsx'},
    {'name': 'conditions/conditions_ltm_159.xlsx', 'path': 'conditions/conditions_ltm_159.xlsx'},
    {'name': 'conditions/conditions_ltm_106.xlsx', 'path': 'conditions/conditions_ltm_106.xlsx'},
    {'name': 'conditions/conditions_ltm_134.xlsx', 'path': 'conditions/conditions_ltm_134.xlsx'},
    {'name': 'stimuli/officechair02.png', 'path': 'stimuli/officechair02.png'},
    {'name': 'conditions/conditions_ltm_119.xlsx', 'path': 'conditions/conditions_ltm_119.xlsx'},
    {'name': 'conditions/conditions_139.xlsx', 'path': 'conditions/conditions_139.xlsx'},
    {'name': 'conditions/conditions_ltm_149.xlsx', 'path': 'conditions/conditions_ltm_149.xlsx'},
    {'name': 'stimuli/pear01.png', 'path': 'stimuli/pear01.png'},
    {'name': 'conditions/conditions_116.xlsx', 'path': 'conditions/conditions_116.xlsx'},
    {'name': 'stimuli/toytractor02a.png', 'path': 'stimuli/toytractor02a.png'},
    {'name': 'conditions/conditions_120.xlsx', 'path': 'conditions/conditions_120.xlsx'},
    {'name': 'conditions/conditions_ltm_155.xlsx', 'path': 'conditions/conditions_ltm_155.xlsx'},
    {'name': 'stimuli/duck01.png', 'path': 'stimuli/duck01.png'},
    {'name': 'conditions/conditions_ltm_167.xlsx', 'path': 'conditions/conditions_ltm_167.xlsx'},
    {'name': 'conditions/conditions_183.xlsx', 'path': 'conditions/conditions_183.xlsx'},
    {'name': 'conditions/conditions_ltm_132.xlsx', 'path': 'conditions/conditions_ltm_132.xlsx'},
    {'name': 'conditions/conditions_ltm_148.xlsx', 'path': 'conditions/conditions_ltm_148.xlsx'},
    {'name': 'stimuli/windsurfboard.png', 'path': 'stimuli/windsurfboard.png'},
    {'name': 'stimuli/greatwhiteshark.png', 'path': 'stimuli/greatwhiteshark.png'},
    {'name': 'stimuli/greywolf.png', 'path': 'stimuli/greywolf.png'},
    {'name': 'conditions/conditions_ltm_107.xlsx', 'path': 'conditions/conditions_ltm_107.xlsx'},
    {'name': 'stimuli/boxingglove01.png', 'path': 'stimuli/boxingglove01.png'},
    {'name': 'conditions/conditions_143.xlsx', 'path': 'conditions/conditions_143.xlsx'},
    {'name': 'stimuli/candelabra.png', 'path': 'stimuli/candelabra.png'},
    {'name': 'conditions/conditions_ltm_152.xlsx', 'path': 'conditions/conditions_ltm_152.xlsx'},
    {'name': 'stimuli/photocopier.png', 'path': 'stimuli/photocopier.png'},
    {'name': 'stimuli/saw02b.png', 'path': 'stimuli/saw02b.png'},
    {'name': 'stimuli/witchhat.png', 'path': 'stimuli/witchhat.png'},
    {'name': 'stimuli/mailbox02.png', 'path': 'stimuli/mailbox02.png'},
    {'name': 'conditions/conditions_150.xlsx', 'path': 'conditions/conditions_150.xlsx'},
    {'name': 'conditions/conditions_ltm_102.xlsx', 'path': 'conditions/conditions_ltm_102.xlsx'},
    {'name': 'conditions/conditions_ltm_140.xlsx', 'path': 'conditions/conditions_ltm_140.xlsx'},
    {'name': 'conditions/conditions_ltm_103.xlsx', 'path': 'conditions/conditions_ltm_103.xlsx'},
    {'name': 'stimuli/aloe01.png', 'path': 'stimuli/aloe01.png'},
    {'name': 'stimuli/lightbulb01.png', 'path': 'stimuli/lightbulb01.png'},
    {'name': 'conditions/conditions_160.xlsx', 'path': 'conditions/conditions_160.xlsx'},
    {'name': 'conditions/conditions_ltm_160.xlsx', 'path': 'conditions/conditions_ltm_160.xlsx'},
    {'name': 'conditions/conditions_154.xlsx', 'path': 'conditions/conditions_154.xlsx'},
    {'name': 'conditions/conditions_ltm_143.xlsx', 'path': 'conditions/conditions_ltm_143.xlsx'},
    {'name': 'conditions/conditions_ltm_100.xlsx', 'path': 'conditions/conditions_ltm_100.xlsx'},
    {'name': 'conditions/conditions_144.xlsx', 'path': 'conditions/conditions_144.xlsx'},
    {'name': 'conditions/conditions_ltm_170.xlsx', 'path': 'conditions/conditions_ltm_170.xlsx'},
    {'name': 'stimuli/acorn.png', 'path': 'stimuli/acorn.png'},
    {'name': 'stimuli/barnowl.png', 'path': 'stimuli/barnowl.png'},
    {'name': 'conditions/conditions_166.xlsx', 'path': 'conditions/conditions_166.xlsx'},
    {'name': 'stimuli/gecko.png', 'path': 'stimuli/gecko.png'},
    {'name': 'conditions/conditions_168.xlsx', 'path': 'conditions/conditions_168.xlsx'},
    {'name': 'conditions/conditions_115.xlsx', 'path': 'conditions/conditions_115.xlsx'},
    {'name': 'stimuli/corkscrew03a.png', 'path': 'stimuli/corkscrew03a.png'},
    {'name': 'conditions/conditions_158.xlsx', 'path': 'conditions/conditions_158.xlsx'},
    {'name': 'conditions/conditions_167.xlsx', 'path': 'conditions/conditions_167.xlsx'},
    {'name': 'stimuli/handbrush02.png', 'path': 'stimuli/handbrush02.png'},
    {'name': 'stimuli/radio03a.png', 'path': 'stimuli/radio03a.png'},
    {'name': 'conditions/conditions_ltm_15.xlsx', 'path': 'conditions/conditions_ltm_15.xlsx'},
    {'name': 'conditions/conditions_147.xlsx', 'path': 'conditions/conditions_147.xlsx'},
    {'name': 'stimuli/paintroller02.png', 'path': 'stimuli/paintroller02.png'},
    {'name': 'conditions/conditions_ltm_128.xlsx', 'path': 'conditions/conditions_ltm_128.xlsx'},
    {'name': 'conditions/conditions_123.xlsx', 'path': 'conditions/conditions_123.xlsx'},
    {'name': 'conditions/conditions_108.xlsx', 'path': 'conditions/conditions_108.xlsx'},
    {'name': 'conditions/instrcutions/instru_9.png', 'path': 'conditions/instrcutions/instru_9.png'},
    {'name': 'stimuli/africanelephant.png', 'path': 'stimuli/africanelephant.png'},
    {'name': 'stimuli/flipflop01a.png', 'path': 'stimuli/flipflop01a.png'},
    {'name': 'conditions/conditions_ltm_112.xlsx', 'path': 'conditions/conditions_ltm_112.xlsx'},
    {'name': 'stimuli/blender.png', 'path': 'stimuli/blender.png'},
    {'name': 'conditions/conditions_ltm_16.xlsx', 'path': 'conditions/conditions_ltm_16.xlsx'},
    {'name': 'conditions/conditions_190.xlsx', 'path': 'conditions/conditions_190.xlsx'},
    {'name': 'conditions/instrcutions/instru_7.png', 'path': 'conditions/instrcutions/instru_7.png'},
    {'name': 'conditions/conditions_152.xlsx', 'path': 'conditions/conditions_152.xlsx'},
    {'name': 'stimuli/cornet.png', 'path': 'stimuli/cornet.png'},
    {'name': 'conditions/conditions_ltm_117.xlsx', 'path': 'conditions/conditions_ltm_117.xlsx'},
    {'name': 'conditions/conditions_ltm_175.xlsx', 'path': 'conditions/conditions_ltm_175.xlsx'},
    {'name': 'conditions/instrcutions/instru_1.png', 'path': 'conditions/instrcutions/instru_1.png'},
    {'name': 'stimuli/quartz.png', 'path': 'stimuli/quartz.png'},
    {'name': 'stimuli/comb02b.png', 'path': 'stimuli/comb02b.png'},
    {'name': 'conditions/conditions_ltm_186.xlsx', 'path': 'conditions/conditions_ltm_186.xlsx'},
    {'name': 'conditions/conditions_151.xlsx', 'path': 'conditions/conditions_151.xlsx'},
    {'name': 'stimuli/wheelbarrow01.png', 'path': 'stimuli/wheelbarrow01.png'},
    {'name': 'conditions/conditions_117.xlsx', 'path': 'conditions/conditions_117.xlsx'},
    {'name': 'conditions/conditions_122.xlsx', 'path': 'conditions/conditions_122.xlsx'},
    {'name': 'conditions/conditions_ltm_19.xlsx', 'path': 'conditions/conditions_ltm_19.xlsx'},
    {'name': 'conditions/conditions_ltm_7.xlsx', 'path': 'conditions/conditions_ltm_7.xlsx'},
    {'name': 'conditions/conditions_128.xlsx', 'path': 'conditions/conditions_128.xlsx'},
    {'name': 'conditions/conditions_162.xlsx', 'path': 'conditions/conditions_162.xlsx'},
    {'name': 'stimuli/pylon01.png', 'path': 'stimuli/pylon01.png'},
    {'name': 'stim/eiffeltower.png', 'path': 'stim/eiffeltower.png'},
    {'name': 'conditions/conditions_ltm_150.xlsx', 'path': 'conditions/conditions_ltm_150.xlsx'},
    {'name': 'conditions/conditions_179.xlsx', 'path': 'conditions/conditions_179.xlsx'},
    {'name': 'conditions/conditions_ltm_158.xlsx', 'path': 'conditions/conditions_ltm_158.xlsx'},
    {'name': 'stimuli/chipmunk.png', 'path': 'stimuli/chipmunk.png'},
    {'name': 'conditions/conditions_ltm_14.xlsx', 'path': 'conditions/conditions_ltm_14.xlsx'},
    {'name': 'conditions/instrcutions/instru_6.png', 'path': 'conditions/instrcutions/instru_6.png'},
    {'name': 'conditions/conditions_126.xlsx', 'path': 'conditions/conditions_126.xlsx'},
    {'name': 'conditions/conditions_131.xlsx', 'path': 'conditions/conditions_131.xlsx'},
    {'name': 'conditions/conditions_146.xlsx', 'path': 'conditions/conditions_146.xlsx'},
    {'name': 'conditions/conditions_176.xlsx', 'path': 'conditions/conditions_176.xlsx'},
    {'name': 'conditions/conditions_ltm_127.xlsx', 'path': 'conditions/conditions_ltm_127.xlsx'},
    {'name': 'conditions/conditions_102.xlsx', 'path': 'conditions/conditions_102.xlsx'},
    {'name': 'stimuli/razor04a.png', 'path': 'stimuli/razor04a.png'},
    {'name': 'stimuli/penguin.png', 'path': 'stimuli/penguin.png'},
    {'name': 'conditions/conditions_137.xlsx', 'path': 'conditions/conditions_137.xlsx'},
    {'name': 'stimuli/bassethound.png', 'path': 'stimuli/bassethound.png'},
    {'name': 'stimuli/backpack01a.png', 'path': 'stimuli/backpack01a.png'},
    {'name': 'conditions/conditions_118.xlsx', 'path': 'conditions/conditions_118.xlsx'},
    {'name': 'conditions/conditions_ltm_183.xlsx', 'path': 'conditions/conditions_ltm_183.xlsx'},
    {'name': 'stimuli/peacock.png', 'path': 'stimuli/peacock.png'},
    {'name': 'stimuli/windshieldwasherfluid.png', 'path': 'stimuli/windshieldwasherfluid.png'},
    {'name': 'stimuli/flamingo.png', 'path': 'stimuli/flamingo.png'},
    {'name': 'conditions/conditions_156.xlsx', 'path': 'conditions/conditions_156.xlsx'},
    {'name': 'conditions/conditions_127.xlsx', 'path': 'conditions/conditions_127.xlsx'},
    {'name': 'conditions/conditions_129.xlsx', 'path': 'conditions/conditions_129.xlsx'},
    {'name': 'conditions/conditions_ltm_138.xlsx', 'path': 'conditions/conditions_ltm_138.xlsx'},
    {'name': 'conditions/conditions_ltm_188.xlsx', 'path': 'conditions/conditions_ltm_188.xlsx'},
    {'name': 'conditions/conditions_ltm_101.xlsx', 'path': 'conditions/conditions_ltm_101.xlsx'},
    {'name': 'stimuli/gardengnome01.png', 'path': 'stimuli/gardengnome01.png'},
    {'name': 'conditions/conditions_153.xlsx', 'path': 'conditions/conditions_153.xlsx'},
    {'name': 'conditions/conditions_ltm_109.xlsx', 'path': 'conditions/conditions_ltm_109.xlsx'},
    {'name': 'stimuli/cat.png', 'path': 'stimuli/cat.png'},
    {'name': 'conditions/conditions_ltm_137.xlsx', 'path': 'conditions/conditions_ltm_137.xlsx'},
    {'name': 'conditions/conditions_ltm_116.xlsx', 'path': 'conditions/conditions_ltm_116.xlsx'},
    {'name': 'stimuli/tabascosauce.png', 'path': 'stimuli/tabascosauce.png'},
    {'name': 'conditions/conditions_ltm_105.xlsx', 'path': 'conditions/conditions_ltm_105.xlsx'},
    {'name': 'stimuli/buoy.png', 'path': 'stimuli/buoy.png'},
    {'name': 'stimuli/handfan01b.png', 'path': 'stimuli/handfan01b.png'},
    {'name': 'stim/coverImage.png', 'path': 'stim/coverImage.png'},
    {'name': 'conditions/conditions_ltm_125.xlsx', 'path': 'conditions/conditions_ltm_125.xlsx'},
    {'name': 'conditions/conditions_ltm_163.xlsx', 'path': 'conditions/conditions_ltm_163.xlsx'},
    {'name': 'stimuli/bicycle.png', 'path': 'stimuli/bicycle.png'},
    {'name': 'stimuli/travelmug.png', 'path': 'stimuli/travelmug.png'},
    {'name': 'stimuli/hat04a.png', 'path': 'stimuli/hat04a.png'},
    {'name': 'stimuli/pintofbeer.png', 'path': 'stimuli/pintofbeer.png'},
    {'name': 'stimuli/microscope.png', 'path': 'stimuli/microscope.png'},
    {'name': 'conditions/conditions_ltm_123.xlsx', 'path': 'conditions/conditions_ltm_123.xlsx'},
    {'name': 'conditions/conditions_175.xlsx', 'path': 'conditions/conditions_175.xlsx'},
    {'name': 'stimuli/adjustablewrench02a.png', 'path': 'stimuli/adjustablewrench02a.png'},
    {'name': 'stimuli/motoroilbottle04.png', 'path': 'stimuli/motoroilbottle04.png'},
    {'name': 'conditions/conditions_185.xlsx', 'path': 'conditions/conditions_185.xlsx'},
    {'name': 'conditions/conditions_ltm_110.xlsx', 'path': 'conditions/conditions_ltm_110.xlsx'},
    {'name': 'conditions/conditions_ltm_118.xlsx', 'path': 'conditions/conditions_ltm_118.xlsx'},
    {'name': 'conditions/conditions_ltm_147.xlsx', 'path': 'conditions/conditions_ltm_147.xlsx'},
    {'name': 'stimuli/acousticguitar02.png', 'path': 'stimuli/acousticguitar02.png'},
    {'name': 'conditions/instrcutions/instru_3.png', 'path': 'conditions/instrcutions/instru_3.png'},
    {'name': 'conditions/conditions_159.xlsx', 'path': 'conditions/conditions_159.xlsx'},
    {'name': 'conditions/conditions_189.xlsx', 'path': 'conditions/conditions_189.xlsx'},
    {'name': 'conditions/conditions_172.xlsx', 'path': 'conditions/conditions_172.xlsx'},
    {'name': 'conditions/conditions_132.xlsx', 'path': 'conditions/conditions_132.xlsx'},
    {'name': 'conditions/conditions_174.xlsx', 'path': 'conditions/conditions_174.xlsx'},
    {'name': 'conditions/conditions_119.xlsx', 'path': 'conditions/conditions_119.xlsx'},
    {'name': 'conditions/conditions_ltm_145.xlsx', 'path': 'conditions/conditions_ltm_145.xlsx'},
    {'name': 'conditions/conditions_ltm_177.xlsx', 'path': 'conditions/conditions_ltm_177.xlsx'},
    {'name': 'conditions/conditions_ltm_165.xlsx', 'path': 'conditions/conditions_ltm_165.xlsx'},
    {'name': 'stimuli/bluejay.png', 'path': 'stimuli/bluejay.png'},
    {'name': 'stimuli/lock02a.png', 'path': 'stimuli/lock02a.png'},
    {'name': 'stimuli/outdoorheater.png', 'path': 'stimuli/outdoorheater.png'},
    {'name': 'conditions/conditions_99.xlsx', 'path': 'conditions/conditions_99.xlsx'},
    {'name': 'conditions/conditions_ltm_11.xlsx', 'path': 'conditions/conditions_ltm_11.xlsx'},
    {'name': 'conditions/conditions_ltm_121.xlsx', 'path': 'conditions/conditions_ltm_121.xlsx'},
    {'name': 'stimuli/parrot01.png', 'path': 'stimuli/parrot01.png'},
    {'name': 'conditions/conditions_ltm_135.xlsx', 'path': 'conditions/conditions_ltm_135.xlsx'},
    {'name': 'conditions/conditions_100.xlsx', 'path': 'conditions/conditions_100.xlsx'},
    {'name': 'stimuli/stackingring01b.png', 'path': 'stimuli/stackingring01b.png'},
    {'name': 'conditions/conditions_ltm_146.xlsx', 'path': 'conditions/conditions_ltm_146.xlsx'},
    {'name': 'stimuli/redfox.png', 'path': 'stimuli/redfox.png'},
    {'name': 'conditions/conditions_ltm_164.xlsx', 'path': 'conditions/conditions_ltm_164.xlsx'},
    {'name': 'conditions/conditions_142.xlsx', 'path': 'conditions/conditions_142.xlsx'},
    {'name': 'conditions/conditions_ltm_176.xlsx', 'path': 'conditions/conditions_ltm_176.xlsx'},
    {'name': 'conditions/conditions_ltm_180.xlsx', 'path': 'conditions/conditions_ltm_180.xlsx'},
    {'name': 'conditions/conditions_ltm_129.xlsx', 'path': 'conditions/conditions_ltm_129.xlsx'},
    {'name': 'conditions/conditions_130.xlsx', 'path': 'conditions/conditions_130.xlsx'},
    {'name': 'stimuli/cupcake.png', 'path': 'stimuli/cupcake.png'},
    {'name': 'conditions/conditions_169.xlsx', 'path': 'conditions/conditions_169.xlsx'},
    {'name': 'conditions/conditions_188.xlsx', 'path': 'conditions/conditions_188.xlsx'},
    {'name': 'conditions/conditions_ltm_12.xlsx', 'path': 'conditions/conditions_ltm_12.xlsx'},
    {'name': 'stimuli/badmintonracket.png', 'path': 'stimuli/badmintonracket.png'},
    {'name': 'conditions/conditions_184.xlsx', 'path': 'conditions/conditions_184.xlsx'},
    {'name': 'conditions/conditions_ltm_182.xlsx', 'path': 'conditions/conditions_ltm_182.xlsx'},
    {'name': 'stimuli/accordion02.png', 'path': 'stimuli/accordion02.png'},
    {'name': 'conditions/conditions_138.xlsx', 'path': 'conditions/conditions_138.xlsx'},
    {'name': 'conditions/conditions_187.xlsx', 'path': 'conditions/conditions_187.xlsx'},
    {'name': 'conditions/conditions_ltm_153.xlsx', 'path': 'conditions/conditions_ltm_153.xlsx'},
    {'name': 'conditions/conditions_ltm_161.xlsx', 'path': 'conditions/conditions_ltm_161.xlsx'},
    {'name': 'conditions/conditions_178.xlsx', 'path': 'conditions/conditions_178.xlsx'},
    {'name': 'stimuli/shoppingcart.png', 'path': 'stimuli/shoppingcart.png'},
    {'name': 'conditions/conditions_125.xlsx', 'path': 'conditions/conditions_125.xlsx'},
    {'name': 'conditions/conditions_ltm_9.xlsx', 'path': 'conditions/conditions_ltm_9.xlsx'},
    {'name': 'conditions/conditions_ltm_171.xlsx', 'path': 'conditions/conditions_ltm_171.xlsx'},
    {'name': 'conditions/conditions_135.xlsx', 'path': 'conditions/conditions_135.xlsx'},
    {'name': 'conditions/conditions_ltm_126.xlsx', 'path': 'conditions/conditions_ltm_126.xlsx'},
    {'name': 'stimuli/gorilla.png', 'path': 'stimuli/gorilla.png'},
    {'name': 'stim/keys.png', 'path': 'stim/keys.png'},
    {'name': 'stimuli/nyala.png', 'path': 'stimuli/nyala.png'},
    {'name': 'stimuli/pipewrench.png', 'path': 'stimuli/pipewrench.png'},
    {'name': 'stimuli/chameleon.png', 'path': 'stimuli/chameleon.png'},
    {'name': 'conditions/conditions_ltm_151.xlsx', 'path': 'conditions/conditions_ltm_151.xlsx'},
    {'name': 'conditions/conditions_140.xlsx', 'path': 'conditions/conditions_140.xlsx'},
    {'name': 'conditions/conditions_ltm_133.xlsx', 'path': 'conditions/conditions_ltm_133.xlsx'},
    {'name': 'stimuli/barbecue02.png', 'path': 'stimuli/barbecue02.png'},
    {'name': 'conditions/instrcutions/instru_5.png', 'path': 'conditions/instrcutions/instru_5.png'},
    {'name': 'stimuli/soapdispenser03b.png', 'path': 'stimuli/soapdispenser03b.png'},
    {'name': 'conditions/conditions_111.xlsx', 'path': 'conditions/conditions_111.xlsx'},
    {'name': 'conditions/conditions_107.xlsx', 'path': 'conditions/conditions_107.xlsx'},
    {'name': 'stimuli/monument.png', 'path': 'stimuli/monument.png'},
    {'name': 'stimuli/bulldozer.png', 'path': 'stimuli/bulldozer.png'},
    {'name': 'conditions/conditions_ltm_139.xlsx', 'path': 'conditions/conditions_ltm_139.xlsx'},
    {'name': 'stimuli/scissors02a.png', 'path': 'stimuli/scissors02a.png'},
    {'name': 'conditions/conditions_ltm_130.xlsx', 'path': 'conditions/conditions_ltm_130.xlsx'},
    {'name': 'conditions/conditions_104.xlsx', 'path': 'conditions/conditions_104.xlsx'},
    {'name': 'conditions/conditions_163.xlsx', 'path': 'conditions/conditions_163.xlsx'},
    {'name': 'conditions/conditions_ltm_144.xlsx', 'path': 'conditions/conditions_ltm_144.xlsx'},
    {'name': 'conditions/conditions_101.xlsx', 'path': 'conditions/conditions_101.xlsx'},
    {'name': 'stimuli/apron.png', 'path': 'stimuli/apron.png'},
    {'name': 'stimuli/fireextinguisher02.png', 'path': 'stimuli/fireextinguisher02.png'},
    {'name': 'stimuli/pumpkin.png', 'path': 'stimuli/pumpkin.png'},
    {'name': 'conditions/conditions_ltm_18.xlsx', 'path': 'conditions/conditions_ltm_18.xlsx'},
    {'name': 'stimuli/graduationcap.png', 'path': 'stimuli/graduationcap.png'},
    {'name': 'stimuli/lynx01.png', 'path': 'stimuli/lynx01.png'},
    {'name': 'conditions/conditions_ltm_173.xlsx', 'path': 'conditions/conditions_ltm_173.xlsx'},
    {'name': 'conditions/conditions_ltm_131.xlsx', 'path': 'conditions/conditions_ltm_131.xlsx'},
    {'name': 'stimuli/fryingpan01.png', 'path': 'stimuli/fryingpan01.png'},
    {'name': 'conditions/conditions_170.xlsx', 'path': 'conditions/conditions_170.xlsx'},
    {'name': 'conditions/conditions_ltm_120.xlsx', 'path': 'conditions/conditions_ltm_120.xlsx'},
    {'name': 'conditions/conditions_ltm_114.xlsx', 'path': 'conditions/conditions_ltm_114.xlsx'},
    {'name': 'stimuli/rollerblade.png', 'path': 'stimuli/rollerblade.png'},
    {'name': 'stimuli/pitcher02a.png', 'path': 'stimuli/pitcher02a.png'},
    {'name': 'stimuli/maraca02a.png', 'path': 'stimuli/maraca02a.png'},
    {'name': 'conditions/conditions_149.xlsx', 'path': 'conditions/conditions_149.xlsx'},
    {'name': 'conditions/conditions_155.xlsx', 'path': 'conditions/conditions_155.xlsx'},
    {'name': 'conditions/conditions_114.xlsx', 'path': 'conditions/conditions_114.xlsx'},
    {'name': 'stimuli/desktopcomputer.png', 'path': 'stimuli/desktopcomputer.png'},
    {'name': 'conditions/conditions_177.xlsx', 'path': 'conditions/conditions_177.xlsx'},
    {'name': 'conditions/conditions_109.xlsx', 'path': 'conditions/conditions_109.xlsx'},
    {'name': 'conditions/conditions_ltm_13.xlsx', 'path': 'conditions/conditions_ltm_13.xlsx'},
    {'name': 'stim/pic_redirection_prolific.png', 'path': 'stim/pic_redirection_prolific.png'},
    {'name': 'stimuli/makeupbrush04.png', 'path': 'stimuli/makeupbrush04.png'},
    {'name': 'conditions/conditions_121.xlsx', 'path': 'conditions/conditions_121.xlsx'},
    {'name': 'conditions/conditions_182.xlsx', 'path': 'conditions/conditions_182.xlsx'},
    {'name': 'stimuli/globe.png', 'path': 'stimuli/globe.png'},
    {'name': 'conditions/conditions_ltm_124.xlsx', 'path': 'conditions/conditions_ltm_124.xlsx'},
    {'name': 'conditions/conditions_164.xlsx', 'path': 'conditions/conditions_164.xlsx'},
    {'name': 'conditions/conditions_ltm_162.xlsx', 'path': 'conditions/conditions_ltm_162.xlsx'},
    {'name': 'conditions/conditions_ltm_174.xlsx', 'path': 'conditions/conditions_ltm_174.xlsx'},
    {'name': 'stimuli/honeybee.png', 'path': 'stimuli/honeybee.png'},
    {'name': 'conditions/conditions_ltm_104.xlsx', 'path': 'conditions/conditions_ltm_104.xlsx'},
    {'name': 'stimuli/thumbtack02b.png', 'path': 'stimuli/thumbtack02b.png'},
    {'name': 'conditions/conditions_ltm_111.xlsx', 'path': 'conditions/conditions_ltm_111.xlsx'},
    {'name': 'conditions/conditions_165.xlsx', 'path': 'conditions/conditions_165.xlsx'},
    {'name': 'conditions/conditions_105.xlsx', 'path': 'conditions/conditions_105.xlsx'},
    {'name': 'conditions/conditions_ltm_172.xlsx', 'path': 'conditions/conditions_ltm_172.xlsx'},
    {'name': 'stimuli/needlenosepliers03b.png', 'path': 'stimuli/needlenosepliers03b.png'},
    {'name': 'conditions/conditions_ltm_4.xlsx', 'path': 'conditions/conditions_ltm_4.xlsx'},
    {'name': 'conditions/instrcutions/instru_2.png', 'path': 'conditions/instrcutions/instru_2.png'},
    {'name': 'conditions/conditions_173.xlsx', 'path': 'conditions/conditions_173.xlsx'},
    {'name': 'stimuli/chessknight03b.png', 'path': 'stimuli/chessknight03b.png'},
    {'name': 'stimuli/dragonfly01.png', 'path': 'stimuli/dragonfly01.png'},
    {'name': 'conditions/conditions_ltm_178.xlsx', 'path': 'conditions/conditions_ltm_178.xlsx'},
    {'name': 'stimuli/megaphone.png', 'path': 'stimuli/megaphone.png'},
    {'name': 'conditions/instrcutions/instru_8.png', 'path': 'conditions/instrcutions/instru_8.png'},
    {'name': 'conditions/conditions_ltm_179.xlsx', 'path': 'conditions/conditions_ltm_179.xlsx'},
    {'name': 'conditions/conditions_ltm_168.xlsx', 'path': 'conditions/conditions_ltm_168.xlsx'},
    {'name': 'conditions/conditions_148.xlsx', 'path': 'conditions/conditions_148.xlsx'},
    {'name': 'conditions/conditions_136.xlsx', 'path': 'conditions/conditions_136.xlsx'},
    {'name': 'conditions/conditions_ltm_99.xlsx', 'path': 'conditions/conditions_ltm_99.xlsx'},
    {'name': 'stimuli/dromedary.png', 'path': 'stimuli/dromedary.png'},
    {'name': 'conditions/conditions_ltm_154.xlsx', 'path': 'conditions/conditions_ltm_154.xlsx'},
    {'name': 'conditions/conditions_ltm_189.xlsx', 'path': 'conditions/conditions_ltm_189.xlsx'},
    {'name': 'stimuli/scrubbingbrush05a.png', 'path': 'stimuli/scrubbingbrush05a.png'},
    {'name': 'conditions/conditions_ltm_185.xlsx', 'path': 'conditions/conditions_ltm_185.xlsx'},
    {'name': 'conditions/conditions_ltm_141.xlsx', 'path': 'conditions/conditions_ltm_141.xlsx'},
    {'name': 'conditions/conditions_141.xlsx', 'path': 'conditions/conditions_141.xlsx'},
    {'name': 'conditions/distractorTask.xlsx', 'path': 'conditions/distractorTask.xlsx'},
    {'name': 'conditions/conditions_180.xlsx', 'path': 'conditions/conditions_180.xlsx'},
    {'name': 'conditions/conditions_ltm_190.xlsx', 'path': 'conditions/conditions_ltm_190.xlsx'},
    {'name': 'stimuli/antlers.png', 'path': 'stimuli/antlers.png'},
    {'name': 'stimuli/chisel01b.png', 'path': 'stimuli/chisel01b.png'},
    {'name': 'stimuli/rhinoceros02.png', 'path': 'stimuli/rhinoceros02.png'},
    {'name': 'conditions/conditions_ltm_136.xlsx', 'path': 'conditions/conditions_ltm_136.xlsx'},
    {'name': 'conditions/conditions_ltm_157.xlsx', 'path': 'conditions/conditions_ltm_157.xlsx'},
    {'name': 'stimuli/clownfish.png', 'path': 'stimuli/clownfish.png'},
    {'name': 'stimuli/boot01.png', 'path': 'stimuli/boot01.png'},
    {'name': 'stimuli/motorcycle.png', 'path': 'stimuli/motorcycle.png'},
    {'name': 'conditions/conditions_171.xlsx', 'path': 'conditions/conditions_171.xlsx'},
    {'name': 'conditions/conditions_ltm_5.xlsx', 'path': 'conditions/conditions_ltm_5.xlsx'},
    {'name': 'conditions/conditions_ltm_98.xlsx', 'path': 'conditions/conditions_ltm_98.xlsx'},
    {'name': 'conditions/attentionChecks.xlsx', 'path': 'conditions/attentionChecks.xlsx'},
    {'name': 'conditions/conditions_ltm_169.xlsx', 'path': 'conditions/conditions_ltm_169.xlsx'},
    {'name': 'stimuli/sailboat.png', 'path': 'stimuli/sailboat.png'},
    {'name': 'stimuli/stapler03b.png', 'path': 'stimuli/stapler03b.png'},
    {'name': 'conditions/conditions_145.xlsx', 'path': 'conditions/conditions_145.xlsx'},
    {'name': 'conditions/conditions_157.xlsx', 'path': 'conditions/conditions_157.xlsx'},
    {'name': 'conditions/conditions_113.xlsx', 'path': 'conditions/conditions_113.xlsx'},
    {'name': 'conditions/conditions_103.xlsx', 'path': 'conditions/conditions_103.xlsx'},
    {'name': 'stimuli/white.png', 'path': 'stimuli/white.png'},
    {'name': 'conditions/conditions_ltm_122.xlsx', 'path': 'conditions/conditions_ltm_122.xlsx'},
    {'name': 'conditions/conditions_ltm_184.xlsx', 'path': 'conditions/conditions_ltm_184.xlsx'},
    {'name': 'conditions/conditions_ltm_113.xlsx', 'path': 'conditions/conditions_ltm_113.xlsx'},
    {'name': 'conditions/conditions_134.xlsx', 'path': 'conditions/conditions_134.xlsx'},
    {'name': 'conditions/conditions_106.xlsx', 'path': 'conditions/conditions_106.xlsx'},
    {'name': 'conditions/conditions_133.xlsx', 'path': 'conditions/conditions_133.xlsx'},
    {'name': 'stimuli/hen.png', 'path': 'stimuli/hen.png'},
    {'name': 'stimuli/toyhockeystick02a.png', 'path': 'stimuli/toyhockeystick02a.png'},
    {'name': 'stimuli/watercooler.png', 'path': 'stimuli/watercooler.png'},
    {'name': 'conditions/conditions_ltm_142.xlsx', 'path': 'conditions/conditions_ltm_142.xlsx'},
    {'name': 'stimuli/nail.png', 'path': 'stimuli/nail.png'},
    {'name': 'stimuli/zebra.png', 'path': 'stimuli/zebra.png'},
    {'name': 'conditions/conditions_ltm_8.xlsx', 'path': 'conditions/conditions_ltm_8.xlsx'},
    {'name': 'conditions/conditions_110.xlsx', 'path': 'conditions/conditions_110.xlsx'},
    {'name': 'conditions/instrcutions/instru_4.png', 'path': 'conditions/instrcutions/instru_4.png'},
    {'name': 'conditions/conditions_181.xlsx', 'path': 'conditions/conditions_181.xlsx'},
    {'name': 'stimuli/loppingshears.png', 'path': 'stimuli/loppingshears.png'},
    {'name': 'stimuli/wateringcan.png', 'path': 'stimuli/wateringcan.png'},
    {'name': 'conditions/conditions_98.xlsx', 'path': 'conditions/conditions_98.xlsx'},
    {'name': 'conditions/conditions_ltm_187.xlsx', 'path': 'conditions/conditions_ltm_187.xlsx'},
    {'name': 'stimuli/armadillo.png', 'path': 'stimuli/armadillo.png'}
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
  psychoJS.setRedirectUrls('https://app.prolific.co/submissions/complete?cc=28E70960', 'https://app.prolific.co/submissions/complete?cc=1B104265');

  return Scheduler.Event.NEXT;
}


var StartClock;
var thisExp;
var shuffle;
var average;
var startMouse;
var instructionsClock;
var random;
var win;
var event;
var img_no;
var current_img;
var instrDict;
var currentInstr;
var instruction;
var instrupic;
var instru_keys;
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
var loop_controlClock;
var thisBlock;
var input;
var id;
var main_task_blocks;
var polygon_2;
var trialCounterClock;
var ntrial;
var trialReal;
var trial_type2_3Clock;
var contextStim1;
var Stim1;
var fixationCross;
var Stim2;
var delay_1;
var trial_baselineClock;
var contextStim2;
var delay_2;
var adjustOr_t1Clock;
var ntrial_WM;
var trialReal_WM;
var contextStim3;
var ori_list;
var log_response_t1;
var adjust_stim;
var arrow_2;
var adjust_keys_t1;
var submit_t1;
var coverimage_t1;
var fixationcrossClock;
var contextStim5;
var fixation_cross;
var adjustOr_t2Clock;
var contextStim4;
var log_response_t2;
var adjust_stim_2;
var arrow_3;
var adjust_keys_t2;
var CoverImage_t2;
var submit_t2;
var pauseClock;
var short_pause;
var testingClock;
var text_5;
var key_resp;
var break_2Clock;
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
  img_no = 1;
  current_img = (("conditions/instrcutions/instru_" + img_no.toString()) + ".png");
  
  instrDict = {"1": "Welcome to this experiment!\nTo continue, please press the right arrow key on your keyboard.", "2": "During this experiment, we will test your short-term memory for object orientations.\n\nIn the following, we will explain how the task works.\nYou can navigate back and forth through the intructions by using the arrow keys.", "3": "We will present objects that are rotated.\nYou will be asked to remember the objects' orientation and recall it a few seconds later.\nIt always goes like this: whenever you see the hint \u201cremember\u201d, it means we are showing the object for the first time, and you should keep its orientation in memory.\nWhenever you see the hint \u201crecall\u201d (a few seconds later) it means we are showing the object another time, and you are asked to recall it's orientation \u2013 simple as that.\n\nThere will be three different types of trials (let's call them trial type A, B and C).", "4": "In trial type A, you will be presented with only one object.\n\nAfter several seconds, you will be asked to recall the orientation of this object. Don't worry, we will show you how you can report the remembered orientation in a moment.", "5": "In trial type B, you will be presented with two rotated objects to remember.\nYour task is again to recall each object's orientation, and to recall them a few seconds later. This time it will just be two orientations to recall.", "6": "In trial type C, you will again be presented with two objects at first.\n\nHowever, this time you will be asked to recall only one of the two later on.\nIt can be either the first or the second object, which means you should at first keep them both in memory (just like in trial type B on the previous slide).\nAs we said earlier: when you see \u201cremember\u201d, keep  what you see in memory. When you see \u201crecall\u201d, recall what you remembered. This way you will always do right, no matter which trial type.", "7": "But how can you let us know  what you recall? Simple: at recall, we will show you the object in question in a random orientation. Then you simply use the arrow keys:\n\nPressing/holding the right arrow key will rotate the object to the right.\nPressing/holding the left arrow keys will rotate the object to the left.\n\nOnce you feel that your adjustment matches your memory, you can log (submit ) it by pressing the space bar.", "8": "Throughout the experiment, please try to respond both fast and accurately.\n\nIn the end of the experiment, we will randomly select 10 of your responses. When your answers were mostly accurate, you will receive a bonus and you will be paid more.\n Whenever you run into technical difficulties during the task, do not restart it, but rather return to Prolific.\n\nLet\u2019s quickly practice how you can rotate an object with the right and left arrow keys.\n\n\n\n[Please press the right arrow when you're ready]", "9": "[Please press the right arrow when you understood the instructions]", "10": "[Please press the right arrow when you're ready]"};
  currentInstr = "1";
  
  instruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: 1.0,
    depth: -3.0 
  });
  
  instrupic = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instrupic', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, (- 190)], size : [1100, 619],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  instru_keys = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "adjustOr_instru"
  adjustOr_instruClock = new util.Clock();
  adjusting_header = new visual.TextStim({
    win: psychoJS.window,
    name: 'adjusting_header',
    text: 'You can use the right and left arrow keys to rotate the object until it matches the orientation that you memorized before. \nWith the space bar you can submit your answer.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.4], height: 0.02,  wrapWidth: undefined, ori: 0.0,
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
  
  // Initialize components for Routine "loop_control"
  loop_controlClock = new util.Clock();
  thisBlock = 0;
  //variable to determine conditions file
  input = await fetch("https://rider.exp.arc.mpib.org/api/inputs/by-group/ids").then(r => r.json());
  id = input.id;
  psychoJS.experiment.addData("participant_id",id);
  main_task_blocks = (("conditions/conditions_" + id.toString()) + ".xlsx");
  
  polygon_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'polygon_2', units : 'pix', 
    vertices: 'cross', size:[20, 20],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('grey'),
    fillColor: new util.Color('grey'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  // Initialize components for Routine "trialCounter"
  trialCounterClock = new util.Clock();
  ntrial = 0;
  trialReal = [];
  
  // Initialize components for Routine "trial_type2_3"
  trial_type2_3Clock = new util.Clock();
  contextStim1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'contextStim1',
    text: 'Remember',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('red'),  opacity: undefined,
    depth: 0.0 
  });
  
  Stim1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Stim1', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 1.0, pos : [0, 0], size : [300, 300],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  fixationCross = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixationCross',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  Stim2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Stim2', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 1.0, pos : [0, 0], size : [300, 300],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  delay_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'delay_1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "trial_baseline"
  trial_baselineClock = new util.Clock();
  contextStim2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'contextStim2',
    text: 'Remember',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('red'),  opacity: undefined,
    depth: 0.0 
  });
  
  Stim2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Stim2', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 1.0, pos : [0, 0], size : [300, 300],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  delay_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'delay_2',
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
  
  contextStim3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'contextStim3',
    text: 'Recall',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('green'),  opacity: 1.0,
    depth: -1.0 
  });
  
  ori_list = [];
  
  log_response_t1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  adjust_stim = new visual.ImageStim({
    win : psychoJS.window,
    name : 'adjust_stim', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 1.0, pos : [0, 0], size : [300, 300],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  arrow_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'arrow_2', units : 'pix', 
    image : 'stim/keys.png', mask : undefined,
    ori : 0.0, pos : [0, 230], size : [1000, 563],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  adjust_keys_t1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  submit_t1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'submit_t1',
    text: 'Click space to submit your answer',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: 1.0,
    depth: -7.0 
  });
  
  coverimage_t1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'coverimage_t1', units : 'pix', 
    image : 'stim/coverImage.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [350, 350],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  // Initialize components for Routine "fixationcross"
  fixationcrossClock = new util.Clock();
  contextStim5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'contextStim5',
    text: 'Recall',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('green'),  opacity: undefined,
    depth: 0.0 
  });
  
  fixation_cross = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_cross',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "adjustOr_t2"
  adjustOr_t2Clock = new util.Clock();
  contextStim4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'contextStim4',
    text: 'Recall',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.35], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('green'),  opacity: 1.0,
    depth: 0.0 
  });
  
  ori_list = [];
  
  log_response_t2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  adjust_stim_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'adjust_stim_2', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 1.0, pos : [0, 0], size : [300, 300],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  arrow_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'arrow_3', units : 'pix', 
    image : 'stim/keys.png', mask : undefined,
    ori : 0.0, pos : [0, 230], size : [1000, 563],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  adjust_keys_t2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  CoverImage_t2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'CoverImage_t2', units : 'pix', 
    image : 'stim/coverImage.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [350, 350],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  submit_t2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'submit_t2',
    text: 'Click space to submit your answer',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.3)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: 1.0,
    depth: -7.0 
  });
  
  // Initialize components for Routine "pause"
  pauseClock = new util.Clock();
  short_pause = new visual.TextStim({
    win: psychoJS.window,
    name: 'short_pause',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "testing"
  testingClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'Well done! \n\nWe will now start with the experiment. You will be able to take a short break after finishing 50 % of the trials.\n\nRemember, you can earn a bonus for answering correctly. \n\n[Press the space bar when you’re ready to start]',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "break_2"
  break_2Clock = new util.Clock();
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
    text: 'We are almost at the end of this experiment. \n\nIn this very last step, you can give us feedback about the task. \nOnce you start typing, the text will appear in the textbox below.\n',
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
    
    for (const thisComponent of StartComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of StartComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of StartComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
    for (const thisInstrLoop of instrLoop) {
      const snapshot = instrLoop.getSnapshot();
      instrLoopLoopScheduler.add(importConditions(snapshot));
      instrLoopLoopScheduler.add(instructionsRoutineBegin(snapshot));
      instrLoopLoopScheduler.add(instructionsRoutineEachFrame());
      instrLoopLoopScheduler.add(instructionsRoutineEnd());
      instrLoopLoopScheduler.add(endLoopIteration(instrLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function instrLoopLoopEnd() {
  psychoJS.experiment.removeLoop(instrLoop);

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
    for (const thisTrial of trials) {
      const snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(loop_controlRoutineBegin(snapshot));
      trialsLoopScheduler.add(loop_controlRoutineEachFrame());
      trialsLoopScheduler.add(loop_controlRoutineEnd());
      const trials_6LoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(trials_6LoopBegin(trials_6LoopScheduler, snapshot));
      trialsLoopScheduler.add(trials_6LoopScheduler);
      trialsLoopScheduler.add(trials_6LoopEnd);
      const start_testingLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(start_testingLoopBegin(start_testingLoopScheduler, snapshot));
      trialsLoopScheduler.add(start_testingLoopScheduler);
      trialsLoopScheduler.add(start_testingLoopEnd);
      const break_trialLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(break_trialLoopBegin(break_trialLoopScheduler, snapshot));
      trialsLoopScheduler.add(break_trialLoopScheduler);
      trialsLoopScheduler.add(break_trialLoopEnd);
      const AttentionExpLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(AttentionExpLoopBegin(AttentionExpLoopScheduler, snapshot));
      trialsLoopScheduler.add(AttentionExpLoopScheduler);
      trialsLoopScheduler.add(AttentionExpLoopEnd);
      const trials_3LoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(trials_3LoopBegin(trials_3LoopScheduler, snapshot));
      trialsLoopScheduler.add(trials_3LoopScheduler);
      trialsLoopScheduler.add(trials_3LoopEnd);
      const quitExpLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(quitExpLoopBegin(quitExpLoopScheduler, snapshot));
      trialsLoopScheduler.add(quitExpLoopScheduler);
      trialsLoopScheduler.add(quitExpLoopEnd);
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_6;
function trials_6LoopBegin(trials_6LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_6 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, main_task_blocks, MyIndicesMain),
      seed: undefined, name: 'trials_6'
    });
    psychoJS.experiment.addLoop(trials_6); // add the loop to the experiment
    currentLoop = trials_6;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_6 of trials_6) {
      const snapshot = trials_6.getSnapshot();
      trials_6LoopScheduler.add(importConditions(snapshot));
      trials_6LoopScheduler.add(trialCounterRoutineBegin(snapshot));
      trials_6LoopScheduler.add(trialCounterRoutineEachFrame());
      trials_6LoopScheduler.add(trialCounterRoutineEnd());
      const trials_5LoopScheduler = new Scheduler(psychoJS);
      trials_6LoopScheduler.add(trials_5LoopBegin(trials_5LoopScheduler, snapshot));
      trials_6LoopScheduler.add(trials_5LoopScheduler);
      trials_6LoopScheduler.add(trials_5LoopEnd);
      const trials_4LoopScheduler = new Scheduler(psychoJS);
      trials_6LoopScheduler.add(trials_4LoopBegin(trials_4LoopScheduler, snapshot));
      trials_6LoopScheduler.add(trials_4LoopScheduler);
      trials_6LoopScheduler.add(trials_4LoopEnd);
      trials_6LoopScheduler.add(adjustOr_t1RoutineBegin(snapshot));
      trials_6LoopScheduler.add(adjustOr_t1RoutineEachFrame());
      trials_6LoopScheduler.add(adjustOr_t1RoutineEnd());
      const skip_trialLoopScheduler = new Scheduler(psychoJS);
      trials_6LoopScheduler.add(skip_trialLoopBegin(skip_trialLoopScheduler, snapshot));
      trials_6LoopScheduler.add(skip_trialLoopScheduler);
      trials_6LoopScheduler.add(skip_trialLoopEnd);
      trials_6LoopScheduler.add(pauseRoutineBegin(snapshot));
      trials_6LoopScheduler.add(pauseRoutineEachFrame());
      trials_6LoopScheduler.add(pauseRoutineEnd());
      trials_6LoopScheduler.add(endLoopIteration(trials_6LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials_5;
function trials_5LoopBegin(trials_5LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_5 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: baselinePresent2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_5'
    });
    psychoJS.experiment.addLoop(trials_5); // add the loop to the experiment
    currentLoop = trials_5;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_5 of trials_5) {
      const snapshot = trials_5.getSnapshot();
      trials_5LoopScheduler.add(importConditions(snapshot));
      trials_5LoopScheduler.add(trial_type2_3RoutineBegin(snapshot));
      trials_5LoopScheduler.add(trial_type2_3RoutineEachFrame());
      trials_5LoopScheduler.add(trial_type2_3RoutineEnd());
      trials_5LoopScheduler.add(endLoopIteration(trials_5LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_5LoopEnd() {
  psychoJS.experiment.removeLoop(trials_5);

  return Scheduler.Event.NEXT;
}


var trials_4;
function trials_4LoopBegin(trials_4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: baselinePresent, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_4'
    });
    psychoJS.experiment.addLoop(trials_4); // add the loop to the experiment
    currentLoop = trials_4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_4 of trials_4) {
      const snapshot = trials_4.getSnapshot();
      trials_4LoopScheduler.add(importConditions(snapshot));
      trials_4LoopScheduler.add(trial_baselineRoutineBegin(snapshot));
      trials_4LoopScheduler.add(trial_baselineRoutineEachFrame());
      trials_4LoopScheduler.add(trial_baselineRoutineEnd());
      trials_4LoopScheduler.add(endLoopIteration(trials_4LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_4LoopEnd() {
  psychoJS.experiment.removeLoop(trials_4);

  return Scheduler.Event.NEXT;
}


var skip_trial;
function skip_trialLoopBegin(skip_trialLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    skip_trial = new TrialHandler({
      psychoJS: psychoJS,
      nReps: adjust2Present, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'skip_trial'
    });
    psychoJS.experiment.addLoop(skip_trial); // add the loop to the experiment
    currentLoop = skip_trial;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSkip_trial of skip_trial) {
      const snapshot = skip_trial.getSnapshot();
      skip_trialLoopScheduler.add(importConditions(snapshot));
      skip_trialLoopScheduler.add(fixationcrossRoutineBegin(snapshot));
      skip_trialLoopScheduler.add(fixationcrossRoutineEachFrame());
      skip_trialLoopScheduler.add(fixationcrossRoutineEnd());
      skip_trialLoopScheduler.add(adjustOr_t2RoutineBegin(snapshot));
      skip_trialLoopScheduler.add(adjustOr_t2RoutineEachFrame());
      skip_trialLoopScheduler.add(adjustOr_t2RoutineEnd());
      skip_trialLoopScheduler.add(endLoopIteration(skip_trialLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function skip_trialLoopEnd() {
  psychoJS.experiment.removeLoop(skip_trial);

  return Scheduler.Event.NEXT;
}


async function trials_6LoopEnd() {
  psychoJS.experiment.removeLoop(trials_6);

  return Scheduler.Event.NEXT;
}


var start_testing;
function start_testingLoopBegin(start_testingLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    start_testing = new TrialHandler({
      psychoJS: psychoJS,
      nReps: testing_start, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'start_testing'
    });
    psychoJS.experiment.addLoop(start_testing); // add the loop to the experiment
    currentLoop = start_testing;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisStart_testing of start_testing) {
      const snapshot = start_testing.getSnapshot();
      start_testingLoopScheduler.add(importConditions(snapshot));
      start_testingLoopScheduler.add(testingRoutineBegin(snapshot));
      start_testingLoopScheduler.add(testingRoutineEachFrame());
      start_testingLoopScheduler.add(testingRoutineEnd());
      start_testingLoopScheduler.add(endLoopIteration(start_testingLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function start_testingLoopEnd() {
  psychoJS.experiment.removeLoop(start_testing);

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
    for (const thisBreak_trial of break_trial) {
      const snapshot = break_trial.getSnapshot();
      break_trialLoopScheduler.add(importConditions(snapshot));
      break_trialLoopScheduler.add(break_2RoutineBegin(snapshot));
      break_trialLoopScheduler.add(break_2RoutineEachFrame());
      break_trialLoopScheduler.add(break_2RoutineEnd());
      break_trialLoopScheduler.add(endLoopIteration(break_trialLoopScheduler, snapshot));
    }
    
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
      nReps: repsAC, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'conditions/attentionChecks.xlsx', '1:7'),
      seed: undefined, name: 'AttentionExp'
    });
    psychoJS.experiment.addLoop(AttentionExp); // add the loop to the experiment
    currentLoop = AttentionExp;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisAttentionExp of AttentionExp) {
      const snapshot = AttentionExp.getSnapshot();
      AttentionExpLoopScheduler.add(importConditions(snapshot));
      AttentionExpLoopScheduler.add(attentionCheckRoutineBegin(snapshot));
      AttentionExpLoopScheduler.add(attentionCheckRoutineEachFrame());
      AttentionExpLoopScheduler.add(attentionCheckRoutineEnd());
      AttentionExpLoopScheduler.add(endLoopIteration(AttentionExpLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function AttentionExpLoopEnd() {
  psychoJS.experiment.removeLoop(AttentionExp);

  return Scheduler.Event.NEXT;
}


var trials_3;
function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: numberACresults, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_3 of trials_3) {
      const snapshot = trials_3.getSnapshot();
      trials_3LoopScheduler.add(importConditions(snapshot));
      trials_3LoopScheduler.add(continueOrEndRoutineBegin(snapshot));
      trials_3LoopScheduler.add(continueOrEndRoutineEachFrame());
      trials_3LoopScheduler.add(continueOrEndRoutineEnd());
      trials_3LoopScheduler.add(endLoopIteration(trials_3LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_3LoopEnd() {
  psychoJS.experiment.removeLoop(trials_3);

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
    for (const thisQuitExp of quitExp) {
      const snapshot = quitExp.getSnapshot();
      quitExpLoopScheduler.add(importConditions(snapshot));
      quitExpLoopScheduler.add(quit_expRoutineBegin(snapshot));
      quitExpLoopScheduler.add(quit_expRoutineEachFrame());
      quitExpLoopScheduler.add(quit_expRoutineEnd());
      quitExpLoopScheduler.add(endLoopIteration(quitExpLoopScheduler, snapshot));
    }
    
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
    for (const thisDisTrial of disTrials) {
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
    }
    
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
    for (const thisLTMtrial of LTMtrial) {
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
      LTMtrialLoopScheduler.add(endLoopIteration(LTMtrialLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
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
    for (const thisBonusLoop of BonusLoop) {
      const snapshot = BonusLoop.getSnapshot();
      BonusLoopLoopScheduler.add(importConditions(snapshot));
      BonusLoopLoopScheduler.add(bonusRoutineBegin(snapshot));
      BonusLoopLoopScheduler.add(bonusRoutineEachFrame());
      BonusLoopLoopScheduler.add(bonusRoutineEnd());
      BonusLoopLoopScheduler.add(endLoopIteration(BonusLoopLoopScheduler, snapshot));
    }
    
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
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
    
    for (const thisComponent of adjustOr_instruComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
        // a response ends the routine
        continueRoutine = false;
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
    for (const thisComponent of adjustOr_instruComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of adjustOr_instruComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('log_response_instru.keys', log_response_instru.keys);
    if (typeof log_response_instru.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('log_response_instru.rt', log_response_instru.rt);
        routineTimer.reset();
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
    
    for (const thisComponent of start_practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of start_practiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of start_practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
    routineTimer.add(2.000000);
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
                    MyIndicesMain = "40:66";
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
    loop_controlComponents.push(polygon_2);
    
    for (const thisComponent of loop_controlComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    
    // *polygon_2* updates
    if (t >= 0.0 && polygon_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_2.tStart = t;  // (not accounting for frame time here)
      polygon_2.frameNStart = frameN;  // exact frame index
      
      polygon_2.setAutoDraw(true);
    }

    frameRemains = 2  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((polygon_2.status === PsychoJS.Status.STARTED || polygon_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      polygon_2.setAutoDraw(false);
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
    for (const thisComponent of loop_controlComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function loop_controlRoutineEnd() {
  return async function () {
    //------Ending Routine 'loop_control'-------
    for (const thisComponent of loop_controlComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
    // update component parameters for each repeat
    ntrial += 1;
    trialReal = ntrial;
    trials.addData("trialNumber", trialReal);
    
    // keep track of which components have finished
    trialCounterComponents = [];
    
    for (const thisComponent of trialCounterComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialCounterComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
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
    for (const thisComponent of trialCounterComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if ((ntrial === 15)) {
        attentionCheck = 1;
    } else {
        attentionCheck = 0;
    }
    
    // the Routine "trialCounter" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trial_type2_3Components;
function trial_type2_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trial_type2_3'-------
    t = 0;
    trial_type2_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(6.000000);
    // update component parameters for each repeat
    Stim1.setOri(startOri1);
    Stim1.setImage(image1);
    fixationCross.setText('+');
    Stim2.setOri(startOri2);
    Stim2.setImage(image2);
    // keep track of which components have finished
    trial_type2_3Components = [];
    trial_type2_3Components.push(contextStim1);
    trial_type2_3Components.push(Stim1);
    trial_type2_3Components.push(fixationCross);
    trial_type2_3Components.push(Stim2);
    trial_type2_3Components.push(delay_1);
    
    for (const thisComponent of trial_type2_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_type2_3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial_type2_3'-------
    // get current time
    t = trial_type2_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *contextStim1* updates
    if (t >= 0.0 && contextStim1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      contextStim1.tStart = t;  // (not accounting for frame time here)
      contextStim1.frameNStart = frameN;  // exact frame index
      
      contextStim1.setAutoDraw(true);
    }

    frameRemains = 6  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((contextStim1.status === PsychoJS.Status.STARTED || contextStim1.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      contextStim1.setAutoDraw(false);
    }
    
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

    frameRemains = 6  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((delay_1.status === PsychoJS.Status.STARTED || delay_1.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
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
    for (const thisComponent of trial_type2_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_type2_3RoutineEnd() {
  return async function () {
    //------Ending Routine 'trial_type2_3'-------
    for (const thisComponent of trial_type2_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var trial_baselineComponents;
function trial_baselineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trial_baseline'-------
    t = 0;
    trial_baselineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(6.000000);
    // update component parameters for each repeat
    Stim2.setOri(startOri1);
    Stim2.setImage(image1);
    // keep track of which components have finished
    trial_baselineComponents = [];
    trial_baselineComponents.push(contextStim2);
    trial_baselineComponents.push(Stim2);
    trial_baselineComponents.push(delay_2);
    
    for (const thisComponent of trial_baselineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_baselineRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial_baseline'-------
    // get current time
    t = trial_baselineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *contextStim2* updates
    if (t >= 0 && contextStim2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      contextStim2.tStart = t;  // (not accounting for frame time here)
      contextStim2.frameNStart = frameN;  // exact frame index
      
      contextStim2.setAutoDraw(true);
    }

    frameRemains = 6  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((contextStim2.status === PsychoJS.Status.STARTED || contextStim2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      contextStim2.setAutoDraw(false);
    }
    
    // *Stim2* updates
    if (t >= 0 && Stim2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Stim2.tStart = t;  // (not accounting for frame time here)
      Stim2.frameNStart = frameN;  // exact frame index
      
      Stim2.setAutoDraw(true);
    }

    frameRemains = 1.5  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((Stim2.status === PsychoJS.Status.STARTED || Stim2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      Stim2.setAutoDraw(false);
    }
    
    // *delay_2* updates
    if (t >= 1.5 && delay_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      delay_2.tStart = t;  // (not accounting for frame time here)
      delay_2.frameNStart = frameN;  // exact frame index
      
      delay_2.setAutoDraw(true);
    }

    frameRemains = 6  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((delay_2.status === PsychoJS.Status.STARTED || delay_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      delay_2.setAutoDraw(false);
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
    for (const thisComponent of trial_baselineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_baselineRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial_baseline'-------
    for (const thisComponent of trial_baselineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var kb;
var fixedOri_t1;
var test1_trial;
var start_distance_t1;
var this_ori_t1;
var _log_response_t1_allKeys;
var _adjust_keys_t1_allKeys;
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
    // keep track of which components have finished
    adjustOr_t1Components = [];
    adjustOr_t1Components.push(contextStim3);
    adjustOr_t1Components.push(log_response_t1);
    adjustOr_t1Components.push(adjust_stim);
    adjustOr_t1Components.push(arrow_2);
    adjustOr_t1Components.push(adjust_keys_t1);
    adjustOr_t1Components.push(submit_t1);
    adjustOr_t1Components.push(coverimage_t1);
    
    for (const thisComponent of adjustOr_t1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function adjustOr_t1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'adjustOr_t1'-------
    // get current time
    t = adjustOr_t1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *contextStim3* updates
    if (t >= 0.0 && contextStim3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      contextStim3.tStart = t;  // (not accounting for frame time here)
      contextStim3.frameNStart = frameN;  // exact frame index
      
      contextStim3.setAutoDraw(true);
    }

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

    frameRemains = 0.15  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((coverimage_t1.status === PsychoJS.Status.STARTED || coverimage_t1.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      coverimage_t1.setAutoDraw(false);
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
    for (const thisComponent of adjustOr_t1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of adjustOr_t1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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


var fixationcrossComponents;
function fixationcrossRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'fixationcross'-------
    t = 0;
    fixationcrossClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    fixationcrossComponents = [];
    fixationcrossComponents.push(contextStim5);
    fixationcrossComponents.push(fixation_cross);
    
    for (const thisComponent of fixationcrossComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function fixationcrossRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'fixationcross'-------
    // get current time
    t = fixationcrossClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *contextStim5* updates
    if (t >= 0.0 && contextStim5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      contextStim5.tStart = t;  // (not accounting for frame time here)
      contextStim5.frameNStart = frameN;  // exact frame index
      
      contextStim5.setAutoDraw(true);
    }

    frameRemains = 1.5  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((contextStim5.status === PsychoJS.Status.STARTED || contextStim5.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      contextStim5.setAutoDraw(false);
    }
    
    // *fixation_cross* updates
    if (t >= 0.0 && fixation_cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_cross.tStart = t;  // (not accounting for frame time here)
      fixation_cross.frameNStart = frameN;  // exact frame index
      
      fixation_cross.setAutoDraw(true);
    }

    frameRemains = 1.5  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((fixation_cross.status === PsychoJS.Status.STARTED || fixation_cross.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      fixation_cross.setAutoDraw(false);
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
    for (const thisComponent of fixationcrossComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixationcrossRoutineEnd() {
  return async function () {
    //------Ending Routine 'fixationcross'-------
    for (const thisComponent of fixationcrossComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var fixedOri_t2;
var test2_trial;
var minimalDistance_t2;
var maxOri_t2;
var start_distance_t2;
var this_ori_t2;
var _log_response_t2_allKeys;
var _adjust_keys_t2_allKeys;
var adjustOr_t2Components;
function adjustOr_t2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'adjustOr_t2'-------
    t = 0;
    adjustOr_t2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    kb = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true}); 
    
    fixedOri_t2 = startOri2;
    test2_trial = 1;
    //setting rotation parameters
    keySpeed = 0.5;
    increasePerFrame = 0.25;
    
    //set the adjusmtent stimulus
    minimalDistance_t2 = 12.5;
    maxOri_t2 = 347.5;
    var oriRange_t2 = [11.25, 33.75, 56.25, 78.75, 101.25, 123.75, 146.25, 168.75, 191.25, 213.75, 236.25, 258.75, 281.25, 303.75, 326.25, 348.75];
    util.shuffle(oriRange_t2);
    start_distance_t2 = oriRange_t2[0];
    
    this_ori_t2 = start_distance_t2;
    
    trials.addData("start_distance_t2", start_distance_t2);
    trials.addData("test2_trial", test2_trial);
    log_response_t2.keys = undefined;
    log_response_t2.rt = undefined;
    _log_response_t2_allKeys = [];
    adjust_stim_2.setImage(test2);
    adjust_keys_t2.keys = undefined;
    adjust_keys_t2.rt = undefined;
    _adjust_keys_t2_allKeys = [];
    // keep track of which components have finished
    adjustOr_t2Components = [];
    adjustOr_t2Components.push(contextStim4);
    adjustOr_t2Components.push(log_response_t2);
    adjustOr_t2Components.push(adjust_stim_2);
    adjustOr_t2Components.push(arrow_3);
    adjustOr_t2Components.push(adjust_keys_t2);
    adjustOr_t2Components.push(CoverImage_t2);
    adjustOr_t2Components.push(submit_t2);
    
    for (const thisComponent of adjustOr_t2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function adjustOr_t2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'adjustOr_t2'-------
    // get current time
    t = adjustOr_t2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *contextStim4* updates
    if (t >= 0.0 && contextStim4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      contextStim4.tStart = t;  // (not accounting for frame time here)
      contextStim4.frameNStart = frameN;  // exact frame index
      
      contextStim4.setAutoDraw(true);
    }

    keys = adjust_keys_t2.getKeys({"waitRelease": false, "clear": false});
    if ((keys.length > 0)) {
        key = keys[(keys.length - 1)];
        if ((! key.duration)) {
            keySpeed += increasePerFrame;
            if ((keySpeed > 10)) {
                keySpeed = 0.5;
            }
            if ((key.name === "left")) {
                this_ori_t2 += keySpeed;
            }
            if ((key.name === "right")) {
                this_ori_t2 -= keySpeed;
            }
        } else {
            keySpeed = 0.5;
        }
    }
    
    
    if ((Math.abs((this_ori_t2 - start_distance_t2)) >= 360)) {
        this_ori_t2 = start_distance_t2;
    } else {
        if ((Math.abs((this_ori_t2 - start_distance_t2)) <= (- 360))) {
            this_ori_t2 = start_distance_t2;
        }
    }
    
    
    // *log_response_t2* updates
    if (t >= 0.0 && log_response_t2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      log_response_t2.tStart = t;  // (not accounting for frame time here)
      log_response_t2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { log_response_t2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { log_response_t2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { log_response_t2.clearEvents(); });
    }

    if (log_response_t2.status === PsychoJS.Status.STARTED) {
      let theseKeys = log_response_t2.getKeys({keyList: ['right', 'left'], waitRelease: false});
      _log_response_t2_allKeys = _log_response_t2_allKeys.concat(theseKeys);
      if (_log_response_t2_allKeys.length > 0) {
        log_response_t2.keys = _log_response_t2_allKeys.map((key) => key.name);  // storing all keys
        log_response_t2.rt = _log_response_t2_allKeys.map((key) => key.rt);
      }
    }
    
    
    // *adjust_stim_2* updates
    if (t >= 0.0 && adjust_stim_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      adjust_stim_2.tStart = t;  // (not accounting for frame time here)
      adjust_stim_2.frameNStart = frameN;  // exact frame index
      
      adjust_stim_2.setAutoDraw(true);
    }

    
    if (adjust_stim_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      adjust_stim_2.setOri(this_ori_t2, false);
    }
    
    // *arrow_3* updates
    if (t >= 0.0 && arrow_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      arrow_3.tStart = t;  // (not accounting for frame time here)
      arrow_3.frameNStart = frameN;  // exact frame index
      
      arrow_3.setAutoDraw(true);
    }

    
    // *adjust_keys_t2* updates
    if (t >= 0.0 && adjust_keys_t2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      adjust_keys_t2.tStart = t;  // (not accounting for frame time here)
      adjust_keys_t2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { adjust_keys_t2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { adjust_keys_t2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { adjust_keys_t2.clearEvents(); });
    }

    if (adjust_keys_t2.status === PsychoJS.Status.STARTED) {
      let theseKeys = adjust_keys_t2.getKeys({keyList: ['space'], waitRelease: false});
      _adjust_keys_t2_allKeys = _adjust_keys_t2_allKeys.concat(theseKeys);
      if (_adjust_keys_t2_allKeys.length > 0) {
        adjust_keys_t2.keys = _adjust_keys_t2_allKeys.map((key) => key.name);  // storing all keys
        adjust_keys_t2.rt = _adjust_keys_t2_allKeys.map((key) => key.rt);
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *CoverImage_t2* updates
    if (t >= 0.0 && CoverImage_t2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      CoverImage_t2.tStart = t;  // (not accounting for frame time here)
      CoverImage_t2.frameNStart = frameN;  // exact frame index
      
      CoverImage_t2.setAutoDraw(true);
    }

    frameRemains = 0.15  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((CoverImage_t2.status === PsychoJS.Status.STARTED || CoverImage_t2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      CoverImage_t2.setAutoDraw(false);
    }
    
    // *submit_t2* updates
    if (t >= 0.0 && submit_t2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      submit_t2.tStart = t;  // (not accounting for frame time here)
      submit_t2.frameNStart = frameN;  // exact frame index
      
      submit_t2.setAutoDraw(true);
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
    for (const thisComponent of adjustOr_t2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var accuracy_test2;
function adjustOr_t2RoutineEnd() {
  return async function () {
    //------Ending Routine 'adjustOr_t2'-------
    for (const thisComponent of adjustOr_t2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    trials.addData("this_ori_t2", this_ori_t2);
    accuracy_test2 = Math.min(Math.abs((this_ori_t2 - fixedOri_t2)), Math.abs((abs((this_ori_t2 - fixedOri_t2)) - 360)));
    trials.addData("accuracy_test2", accuracy_test2);
    trials.addData("trial_type", trial_type);
    ori_list.append(accuracy_test2);
    psychoJS.experiment.addData('log_response_t2.keys', log_response_t2.keys);
    if (typeof log_response_t2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('log_response_t2.rt', log_response_t2.rt);
        }
    
    log_response_t2.stop();
    psychoJS.experiment.addData('adjust_keys_t2.keys', adjust_keys_t2.keys);
    if (typeof adjust_keys_t2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('adjust_keys_t2.rt', adjust_keys_t2.rt);
        routineTimer.reset();
        }
    
    adjust_keys_t2.stop();
    // the Routine "adjustOr_t2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var pauseComponents;
function pauseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'pause'-------
    t = 0;
    pauseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    // keep track of which components have finished
    pauseComponents = [];
    pauseComponents.push(short_pause);
    
    for (const thisComponent of pauseComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function pauseRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'pause'-------
    // get current time
    t = pauseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *short_pause* updates
    if (t >= 0.0 && short_pause.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      short_pause.tStart = t;  // (not accounting for frame time here)
      short_pause.frameNStart = frameN;  // exact frame index
      
      short_pause.setAutoDraw(true);
    }

    frameRemains = 1.5  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((short_pause.status === PsychoJS.Status.STARTED || short_pause.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      short_pause.setAutoDraw(false);
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
    for (const thisComponent of pauseComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pauseRoutineEnd() {
  return async function () {
    //------Ending Routine 'pause'-------
    for (const thisComponent of pauseComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var testingComponents;
function testingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'testing'-------
    t = 0;
    testingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    testingComponents = [];
    testingComponents.push(text_5);
    testingComponents.push(key_resp);
    
    for (const thisComponent of testingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function testingRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'testing'-------
    // get current time
    t = testingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
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
    for (const thisComponent of testingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function testingRoutineEnd() {
  return async function () {
    //------Ending Routine 'testing'-------
    for (const thisComponent of testingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "testing" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var break_2Components;
function break_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'break_2'-------
    t = 0;
    break_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    break_2Components = [];
    break_2Components.push(breakText);
    break_2Components.push(key_resp_2);
    
    for (const thisComponent of break_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function break_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'break_2'-------
    // get current time
    t = break_2Clock.getTime();
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
    for (const thisComponent of break_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function break_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'break_2'-------
    for (const thisComponent of break_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "break_2" was not non-slip safe, so reset the non-slip timer
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
    
    for (const thisComponent of attentionCheckComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of attentionCheckComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of attentionCheckComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
    
    for (const thisComponent of continueOrEndComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of continueOrEndComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of continueOrEndComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
    
    for (const thisComponent of quit_expComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of quit_expComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of quit_expComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
    
    for (const thisComponent of start_distractionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of start_distractionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of start_distractionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
    
    for (const thisComponent of timeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of timeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of timeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
    
    for (const thisComponent of distractionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of distractionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of distractionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
    
    for (const thisComponent of feedback_disComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    /* Syntax Error: Fix Python code */
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedback_disComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of feedback_disComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
    
    for (const thisComponent of start_LTMComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of start_LTMComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of start_LTMComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
    
    for (const thisComponent of loop_control_ltmComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of loop_control_ltmComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of loop_control_ltmComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
    
    for (const thisComponent of fixationcross2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of fixationcross2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of fixationcross2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
    // keep track of which components have finished
    LTM_testComponents = [];
    LTM_testComponents.push(log_responseLTM);
    LTM_testComponents.push(contextStim_LTM);
    LTM_testComponents.push(adjust_stim_LTM);
    LTM_testComponents.push(arrow_4);
    LTM_testComponents.push(adjust_keys_LTM);
    LTM_testComponents.push(CoverImage_LTM);
    
    for (const thisComponent of LTM_testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


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

    frameRemains = 0.15  - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((CoverImage_LTM.status === PsychoJS.Status.STARTED || CoverImage_LTM.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      CoverImage_LTM.setAutoDraw(false);
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
    for (const thisComponent of LTM_testComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of LTM_testComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
        msgBonus = "CONGRATULATIONS! The randomly picked responses were correct. You will receive the BONUS!\n\nPlease press the space button to continue to the end of the experiment.";
        get_bonus = 1;
        psychoJS.experiment.addData("Bonus", get_bonus);
    } else {
        msgBonus = "CONGRATULATIONS! The randomly picked responses were correct. You will receive the BONUS!\n\nPlease press the space button to continue to the end of the experiment.";
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
    
    for (const thisComponent of bonusComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of bonusComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of bonusComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
    
    for (const thisComponent of feedback_expComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of feedback_expComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of feedback_expComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
    
    for (const thisComponent of theEndComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
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
    for (const thisComponent of theEndComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
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
    for (const thisComponent of theEndComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.experiment.addData('globalClockTime', globalClock.getTime());
  psychoJS.experiment.nextEntry();
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}

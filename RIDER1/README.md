<h2> :star2: <strong>RIDER 1</strong></h2>

<p>In this section of the repository, you will find all the code and resources necessary to run the <strong>RIDER 1 experiment</strong>.</p>

<h3> :mechanical_arm: <strong>Overview of the Folders</strong></h3>

<ul>
  <li> &#128391; <strong><code>condition_files:</code></strong> This folder contains the <code>.csv</code> files that define the trial structure for the experiment.</li>
  <li> &#128190; <strong><code>generation_exp_files:</code></strong> This folder holds the scripts used to generate the trial structures found in the <code>condition_files</code>. These scripts are designed to balance variables and stimuli, minimizing any potential stimulus effects.</li>
  <li> &#128126; <strong><code>lib:</code></strong> This folder includes additional JavaScript functions and libraries needed to run the task, in addition to those from the <code>PsychoPy</code> library.</li>
  <li> &#128444; <strong><code>stim:</code></strong> This folder contains supplementary stimuli used for instructions and general visual elements within the trials.</li>
  <li> &#128444; <strong><code>stimuli:</code></strong> Here you’ll find a subset of stimuli used in the experiment. The complete stimulus set isn’t provided in this repository to keep its size manageable and avoid Git LFS. You can reference the full stimulus list in the condition files.
    <ul>
      <li> &#128218; <strong><code>instructions:</code></strong> Contains visual aids used for explaining the task. The full instruction routine is embedded within the experiment script itself.</li>
    </ul>
  </li>
</ul>

<h3> :mechanical_arm: <strong>Overview of the Scripts to Run the Demo Task</strong></h3>

<ul>
  <li> &#128126; <strong><code>RIDER1_task_continous_ori.js:</code></strong> The main script required to run the task in an online environment.</li>
  <li> &#128126; <strong><code>RIDER1_task_continous_ori.psyexp:</code></strong> A PsychoPy Builder file that provides an overview of the experiment’s structure and flow.</li>
  <li> &#128126; <strong><code>RIDER1_task_continous_ori-legacy-browsers.js:</code></strong> This version of the task script ensures compatibility with certain older browsers.</li>
</ul>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

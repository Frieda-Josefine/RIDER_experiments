
<!-- Table of Contents -->
# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  * [The RIDER experiment series](#mechanical_arm-The-RIDER-experiment-series)
  * [Experiment Design](#file_cabinet-Library)
- [Getting Started](#running-getting-started)
  * [Setting up your experiments](#computer-setting-Setting-up-your-experiments)
- [License](#warning-license)
- [Citation](#page_with_curl-citation)
- [Contributions](#gem-contributions)


<!-- About the Project -->
## :star2: About the Project
The `RIDER` experiment series consists of 3 different novel visual Working Memory (VWM) experiments, which we designed to investigate which factors determine whether information temporarily held in working memory (WM) is transferred to long-term memory (LTM). Previous work has shown that retrieving (“testing”) memories from LTM can benefit their future LTM recall. Using the experiments contained in this repository, we examined the extent to which a benefit for subsequent LTM may also occur after retrieval from WM, depending on whether the WM contents were retrieved from a prioritized or deprioritized state. In these three experiments (`RIDER1`, `RIDER2`,`RIDER3`), we combined variants of a novel VWM paradigm with a subsequent surprise LTM recall test..

:rotating_light: The folders you see hold the experiment code for each of the experiments. The original paper documents the whole experiment series.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- The RIDER experiment series -->
### :mechanical_arm: The RIDER experiment series
With `RIDER1/2/3`, you can:
- use continous reports in both WM and LTM and look at how active retrieval from WM (WM “testing”) affects the transfer of information to LTM, depending on whether the information was retrieved from a prioritized or a deprioritized WM state(`RIDER 1`).
- use a classical (single) retro-cue paradigm to investigate the consequences of retrieval from different priority states in a different WM priority manipulation (`RIDER 3`).
- use binary reports to ask whether the LTM consequences of WM retrieval hinged on the format of WM testing (i.e., continuous reports vs. delayed recognition/comparison)(`RIDER 3`).
<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- Experiment Design -->
### :file_cabinet: Library
All experiments are designed using the [Psychopy](https://www.psychopy.org/) library for creating online experiments. We use several custom libraries and dependencies that are not included in the Psychopy source code. These are placed in the /lib folder in each experiment directory.

<!-- Getting Started -->
## :running: Getting Started

<!-- Setting up your experiments -->
### :computer: Setting up your experiments
#### Working online and locally

For each experiment, you will find scripts to run the experiments either online (.js files) or locally on your computer (.psyexp files). Upon downloading the experiment subfolders, you will have access to all the necessary resources for running the respective experiments. Please be aware that minor adjustments to the code may be required depending on the specific setup of your local machine or server. Since our experiments were designed to run on the MPIB servers, certain customizations were made to the experiment code, which may differ from what is needed for your setup. Detailed information regarding these customizations can be found in the respective README files provided with each experiment.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- License -->
## :warning: License
This GitHub repository is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.


<!-- Citation -->
## :page_with_curl: Citation
 Please cite our [paper]() when using the experiment code or reporting our results.

 ```latex
 Following when published
 ```

<!-- Contributions -->
## :gem: Contributions

This experiment series was designed and conducted at the [Max Planck Institute for Human Development](https://www.mpg.de/149875/human-development), Berlin. Correspondence and requests should be adressed to [Frieda Born](born@mpib-berlin.mpg.de). Feel free to contact us if you have any suggestions/feedback. We'll try to respond as fast as we can.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# J-D-Heijink.github.io

## Public stuff for easy access

Explanation of parameters in config.json:
=========================================
1. path
    * people: Directory where images of known people are stored (subdirectory name is name of person)
    * pictures: Directory where slide show pictures are stored
    * logging: Directory where log files are stored
1. recognition:
    * jitter: Control number of times to re-sample when building network for a single face
    * tolerance: Tolerance number for face recognition between 0 and 1 (default is 0.6, lower value for more strictness)
1. timing:
    * slide.delay: Delay between between consecutive slides in slide show (in seconds)
    * forget.recognition: Forget a face when it hasn't been recognized for a while (in seconds)
    * loop.delay: Delay between consecutive iterations of main loop (in seconds)
    * camera.throttle: Delay between consecutive analyses of webcam images (in seconds)
1. logging
    * dissimilarity: Threshold to log new image, between 0 (identical) and 1 (very different)

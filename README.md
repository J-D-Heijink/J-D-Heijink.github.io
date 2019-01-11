# J-D-Heijink.github.io

## Public stuff for easy access

Explanation of parameters in config.json:
=========================================
1. path
    * people: Directory where images of known people are stored (subdirectory name is name of person)
    * pictures: Directory where categorized pictures are stored (subdirectory name is category name)
    * songs: Directory where categorized songs are stored (subdirectory name is category name)
    * logging: Directory where log files are stored
    * cache: Directory where results are cached, e.g. face encodings
1. extension
    * picture: Array with file extensions of pictures
    * song: Array with file extensions of songs
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
1. camera
    * flip: Flip image if camera is upside down
    * height: Desired resolution height of camera image
    * input: Input device (use zero for default camera)
    * width: Desired resolution width of camera image
1. web
    * host: Listening host, e.g. "0.0.0.0" to accept from all hosts or "127.0.0.1" for localhost only
    * port: Listening port
    * upload.limit: Limit the size of uploaded files (in kilobytes)

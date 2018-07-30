import glob
import os

thisFolder = glob.glob('*.mp3')
for x in thisFolder:
    original = x
    if x.find("'") != -1:
        print x.find("'")
        x = x.replace("'","")
        os.rename(original, x)
    else:
        pass

    print '"{}", '.format(x), 
    #html_x = "<div onclick='$.playSound(\"sound_files/Larry/{}\")' class=\"sbButton\"></div>\n".format(x)
    #print html_x
    

---
sidebar_position: 1
---

# Popular Questions


### FAQ

**Q: There were errors while setting up the docker container with Magento. What can I do?**  
A: Make sure you have a docker installed. If you are on Windows, make sure you are working in wsl console.


**Q: The link https://magento.test/ does not work**  
A: Make sure you've updated hosts file with the line: 127.0.0.1 magento.test


**Q: Opening https://magento.test/ gives an SSL error after clicking on ‘Proceed to magento.test (unsafe)’ button the connection is shown as untrusted**  
A: Follow the steps from github thread: https://github.com/markshust/docker-magento/discussions/372#discussioncomment-5203640


**Q: During the backup restore process, the script failed with the error lstat /home/elena_kim/magento/backup: no such file or directory**  
A: Make sure that you have  'backup' directory in the site root and backup is unpacked into this folder


**Q: During the backup restore process, the script failed with the error: The rollback file doesn't exist. Verify the file and try again.**  
A: it could be (as in my case) that you don't have owner's rights to Docker's image backup folder
in the magento folder please run bin/fixowns


**Q: Keep getting an error Project directory "/var/www/html/." is not empty.**  
inside of your project folder execute bin/removeall
A: follow manual setup https://github.com/markshust/docker-magento#new-projects


**Q: Execution of bin/magento setup:upgrade produce error OCI runtime exec failed: exec failed: unable to start container process: exec: "bin/magento": permission denied: unknown**  
A: run bin/fixperms command

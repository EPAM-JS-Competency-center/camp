---
sidebar_position: 5
---

# 1.5. Practical Task - Setting up the Initial State of Magento Locally

## Context

This task allows you to install and configure Magento using Docker. Once installed, users can use the Magento UI to browse products and categories and interact with the Magento API to get product and category information.


## Acceptance Criteria

- Ensure Magento is successfully installed and configured using Docker.
- Magento UI Operational:
  - Confirm that the Magento user interface is functional.
  - Users can navigate, view products, and browse categories without issues.
- Magento Admin Panel:
  - Validate that the Magento API is working.
  - Users can access product and category information via the Admin panel without errors.
- Product and Category Display:
  - Verify that products and categories are visible and organized correctly in the UI.


## Task

### Install Magento

```bash
# Create your project directory then go into it:
mkdir -p ~/Sites/magento
cd $_

# Run this automated one-liner from the directory you want to install your project.
curl -s https://raw.githubusercontent.com/markshust/docker-magento/master/lib/onelinesetup | bash -s -- magento.test 2.4.6-p4 community
```

The `magento.test` above defines the hostname to use, and the `2.4.6-p4` defines the Magento version to install. Note that since we need a write to `/etc/hosts` for DNS resolution, you will be prompted for your system password during setup.

After the one-liner above completes running, you should be able to access your site at `https://magento.test`.

### Install sample data

After the above installation is complete, run the following lines to install sample data:

```bash
bin/magento sampledata:deploy
bin/magento setup:upgrade
```


### Steps to setup initial state of the magento:

1. Install magento with the automated onelinesetup script. Example of how to do it:  https://courses.m.academy/courses/set-up-magento-2-development-environment-docker/lectures/8974570

2. To setup proper state of the magento app:  
    
    a. Download backup from https://drive.google.com/file/d/17H_i-BLjry-ZSSthbG65K-6DoqaWS9wU/view?usp=sharing  

    b. Prepare backup:  

    ```bash
    sudo apt-get install unzip
    unzip backup.zip
    current_folder=$(basename "$PWD")
    container_name="${current_folder}-app-1"
    docker cp ./backup $container_name:var/www/html/var/backups
    ```   

    c. Run command to rollback backup  

    ```bash
    bin/magento setup:rollback -c 1687872010_filesystem_code.tgz -m 1687872010_filesystem_media.tgz -d  1687872010_db.sql
    bin/magento setup:upgrade

    ```

    c. Check `magento.test` and `magento.test/admin (with mynewuser1, mynewpassword1)` 
    

## Source

- https://github.com/zhymkovYaroslav/magento-legacy-ecom
- https://github.com/zhymkovYaroslav/docker-magento
- https://courses.m.academy/courses/set-up-magento-2-development-environment-docker/lectures/8974570

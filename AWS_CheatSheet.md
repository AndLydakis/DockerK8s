### EBS Application Creation

* Go to AWS Management Console and use Find Services to search for Elastic Beanstalk

* Click “Create Application”

* Set Application Name to 'multi-docker'

* Scroll down to Platform and select Docker

* In Platform Branch, select Multi-Container Docker running on 64bit Amazon Linux

* Click Create Application

* You may need to refresh, but eventually, you should see a green checkmark underneath Health.

### RDS Database Creation

* Go to AWS Management Console and use Find Services to search for RDS

* Click Create database button

* Select PostgreSQL

* In Templates, check the Free tier box.

* Scroll down to Settings.

* Set DB Instance identifier to multi-docker-postgres

* Set Master Username to postgres

* Set Master Password to postgrespassword and confirm.

* Scroll down to Connectivity. Make sure VPC is set to Default VPC

* Scroll down to Additional Configuration and click to unhide.

* Set Initial database name to fibvalues

* Scroll down and click Create Database button

### ElastiCache Redis Creation

* Go to AWS Management Console and use Find Services to search for ElastiCache

* Click Redis in sidebar

* Click the Create button

* Make sure Cluster Mode Enabled is NOT ticked

* In Redis Settings form, set Name to multi-docker-redis

* Change Node type to 'cache.t2.micro'

* Change Replicas per Shard to 0

* Scroll down and click Create button

### Creating a Custom Security Group

* Go to AWS Management Console and use Find Services to search for VPC

* Find the Security section in the left sidebar and click Security Groups

* Click Create Security Group button

* Set Security group name to multi-docker

* Set Description to multi-docker

* Make sure VPC is set to default VPC

* Click Create Button

* Scroll down and click Inbound Rules

* Click Edit Rules button

* Click Add Rule

* Set Port Range to 5432-6379

* Click in the box next to Source and start typing 'sg' into the box. Select the Security Group you just created.

* Click Create Security Group

### Applying Security Groups to ElastiCache

* Go to AWS Management Console and use Find Services to search for ElastiCache

* Click Redis in Sidebar

* Check the box next to Redis cluster

* Click Actions and click Modify

* Click the pencil icon to edit the VPC Security group. Tick the box next to the new multi-docker group and click Save

* Click Modify

### Applying Security Groups to RDS

* Go to AWS Management Console and use Find Services to search for RDS

* Click Databases in Sidebar and check the box next to your instance

* Click Modify button

* Scroll down to Network and Security and add the new multi-docker security group

* Scroll down and click Continue button

* Click Modify DB instance button

### Applying Security Groups to Elastic Beanstalk

* Go to AWS Management Console and use Find Services to search for Elastic Beanstalk

* Click Environments in the left sidebar.

* Click MultiDocker-env

* Click Configuration

* In the Instances row, click the Edit button.

* Scroll down to EC2 Security Groups and tick box next to multi-docker

* Click Apply and Click Confirm

* After all the instances restart and go from No Data to Severe, you should see a green checkmark under Health.


### Add AWS configuration details to .travis.yml file's deploy script

* Set the region. The region code can be found by clicking the region in the toolbar next to your username.
eg: 'us-east-1'

* app should be set to the EBS Application Name
eg: 'multi-docker'

* env should be set to your EBS Environment name.
eg: 'MultiDocker-env'

* Set the bucket_name. This can be found by searching for the S3 Storage service. Click the link for the elasticbeanstalk bucket that matches your region code and copy the name.

eg: 'elasticbeanstalk-us-east-1-923445599289'

* Set the bucket_path to 'docker-multi'

* Set access_key_id to $AWS_ACCESS_KEY

* Set secret_access_key to $AWS_SECRET_KEY

### Setting Environment Variables

* Go to AWS Management Console and use Find Services to search for Elastic Beanstalk

* Click Environments in the left sidebar.

* Click MultiDocker-env

* Click Configuration

* In the Software row, click the Edit button

* Scroll down to Environment properties

* In another tab Open up ElastiCache, click Redis and check the box next to your cluster. Find the Primary Endpoint and copy that value but omit the :6379

* Set REDIS_HOST key to the primary endpoint listed above, remember to omit :6379

* Set REDIS_PORT to 6379

* Set PGUSER to postgres

* Set PGPASSWORD to postgrespassword

* In another tab, open up the RDS dashboard, click databases in the sidebar, click your instance and scroll to Connectivity and Security. Copy the endpoint.

* Set the PGHOST key to the endpoint value listed above.

* Set PGDATABASE to fibvalues

* Set PGPORT to 5432

* Click Apply button

* After all instances restart and go from No Data, to Severe, you should see a green checkmark under Health.

### IAM Keys for Deployment

### You can use the same IAM User's access and secret keys from the single container app we created earlier.

### AWS Keys in Travis

* Go to your Travis Dashboard and find the project repository for the application we are working on.

* On the repository page, click "More Options" and then "Settings"

* Create an AWS_ACCESS_KEY variable and paste your IAM access key

* Create an AWS_SECRET_KEY variable and paste your IAM secret key

### Deploying App

* Make a small change to your src/App.js file in the greeting text.

* In the project root, in your terminal run:

    git add.
    git commit -m “testing deployment"
    git push origin master

* Go to your Travis Dashboard and check the status of your build.

* The status should eventually return with a green checkmark and show "build passing"

* Go to your AWS Elasticbeanstalk application

* It should say "Elastic Beanstalk is updating your environment"

* It should eventually show a green checkmark under "Health". You will now be able to access your application at the external URL provided under the environment name.
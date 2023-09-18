pipeline {
    agent any

    environment {
       
        SONARQUBE_PROJECT_KEY = 'MGABE'
    }

    stages {
        stage('Checkout') {
            steps {
                
                checkout scm
            }
        }

        stage('SonarQube analysis') {
            steps {
                script {
                   
                    withCredentials([string(credentialsId: 'jenkins-sonarqube-token', variable: 'SONARQUBE_TOKEN')]) {
                        withSonarQubeEnv('sq1') {
                            sh '''
                                sonar-scanner \
                                -Dsonar.projectKey=${SONARQUBE_PROJECT_KEY} \
                                -Dsonar.sources=. \
                                -Dsonar.login=${SONARQUBE_TOKEN}
                            '''
                        }
                    }
                }
            }
        }
    }

    post {
        always {
            // Publish the SonarQube results to the SonarQube server
            script {
                if (currentBuild.resultIsBetterOrEqualTo('SUCCESS')) {
                    timeout(time: 1, unit: 'HOURS') {
                        waitForQualityGate abortPipeline: true
                    }
                }
            }
        }
    }
}

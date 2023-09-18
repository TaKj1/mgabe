pipeline {
    agent {
        label 'Home-node'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout your code from the source code management system
                checkout scm
            }
        }

        stage('SonarQube Analysis') {
            steps {
                script {
                    // Define scannerHome using the tool
                    def scannerHome = tool name: 'sonar-tool', type: 'SonarQube Scanner';
                    withSonarQubeEnv(credentialsId: 'jenkins-sonarqube-token' {
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }
    }

    post {
        always {
            // This step is essential for the "Wait for SonarQube analysis to be completed" in a Declarative Pipeline.
            script {
                def qualityGate = waitForQualityGate()
                if (qualityGate.status != 'OK' && qualityGate.status != 'WARN') {
                    currentBuild.result = 'FAILURE'
                }
            }
        }
    }
}

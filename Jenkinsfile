pipeline {
    agent any 

    tools {
      
        sonarQubeScanner 'sonarqube-scanner-latest' 
    }

    stages {
        stage('Checkout') {
            steps {
                // Checks out code from your GitHub repo
                checkout scm 
            }
        }

        stage('SonarQube analysis') {
            steps {
                script {
                    // Use the SonarQube environment from your configured SonarQube server
                    withSonarQubeEnv('sq1') {
                        // Run SonarQube scanner
                        sh "${tool name: 'SonarScannerConfig', type: 'SonarQube Scanner'}/bin/sonar-scanner -Dsonar.projectKey=MGABE -Dsonar.sources=. -Dsonar.login=$SONARQUBE_TOKEN"
                    }
                }
            }
        }
    }

    post {
        always {
            // This step allows Jenkins to detect the result of the analysis in SonarQube and therefore to apply the quality gate status to the build.
            sonarQubeQualityGate '-Dsonar.login=$SONARQUBE_TOKEN' 
        }
    }
}

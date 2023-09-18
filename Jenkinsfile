node {
    stage('SCM') {
        checkout scm
    }

    stage('SonarQube Analysis') {
        def scannerHome = tool name: 'sonar-tool', type: 'hudson.plugins.sonar.SonarRunnerInstallation'; 
        // Make sure to replace 'SonarScanner' above with the name you set in Jenkins for the SonarQube Scanner tool
        withSonarQubeEnv() {
            sh "${scannerHome}/bin/sonar-scanner"
        }
    }
}

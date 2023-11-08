node ('Home-node'){
    stage('SCM') {
        checkout scm
    }

    stage('SonarQube Analysis') {
        def scannerHome = tool 'sonar-tool';
    withSonarQubeEnv('sonnarqube') { 
      sh "${scannerHome}/bin/sonar-scanner"
        }
    }
    stage("Quality Gate"){
        timeout(time: 240, unit: 'SECONDS'){
            def qg = waitForQualityGate()
            if(qg.status !="OK" && qg.status !='WARN'){
                echo "Quality gate status: ${qg.status}"
            }
        }
    }
    
}

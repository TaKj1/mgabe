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
    post{
        success {
            withCredentials([string(credentialsId: '11ff860f-e8f6-43ac-b87a-7eabdaee8d9c', variable: 'GITLAB_TOKEN')]) {
            script {
                    def refName = 'main'
                    def projectId = '3'
                    def gitlabApiUrl = "http://192.168.1.33:9095/api/v4/projects/${projectId}/ref/${refName}/trigger/pipeline"
                    sh "curl --request POST '${gitlabApiUrl}' --form 'token=${GITLAB_TOKEN}'"
                }
        }
    }
   
    
}

$(function() {
  function GithubInteractor(token) {
    this.token = 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;
  }
  let interactor = new GithubInteractor(accessToken);
  console.log(interactor)

  function createIssue(repoName, repoOwner, issueTitle, issueBody) {
    let url = “https://github.com/PeteMcD85/GitHubInterface/issues";
      console.log(url);
      $.ajax({
        url: url,
        type: “POST”,
        beforeSend: function(xhr) {
          xhr.setRequestHeader(“Authorization”, “token“ + interactor.token);
        },
        data: JSON.stringify({
          title: issueTitle,
          body: issueBody
        })
      }).done(handleResponse)
      .fail(handleError);
  } //end of createIssue()
}); //end`

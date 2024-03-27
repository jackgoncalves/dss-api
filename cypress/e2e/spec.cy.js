/// <reference types="Cypress" />

describe('API', () => {
  const token = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJBYjFkR0kwcXlnTzA3SUpUNlZiRnhleHZpXzQ1ZFhhVFViQnd5UG1MQlo4In0.eyJleHAiOjE2OTM0MjAyMzksImlhdCI6MTY5MzQxNjYzOSwianRpIjoiZGFlZmE4ZjEtNjkxMy00MTkzLWFkMzktOTYwY2FjNDJlYTQ1IiwiaXNzIjoiaHR0cHM6Ly9zc28ub3BzLXFhcy50aS5ydW1vbG9nLmNvbS9hdXRoL3JlYWxtcy90bGctZGV2IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImE1NzU2M2IwLThiMzctNGM0Zi04ZDYyLWEzZmI5MDgwNmJhOSIsInR5cCI6IkJlYXJlciIsImF6cCI6InBhdGlvLWRzcyIsInNlc3Npb25fc3RhdGUiOiI0OTEyMDUxNS1jYWJiLTRhY2ItOGY2Zi1hYTgxNjYwNDRhNDUiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MCIsImh0dHBzOi8vZGV2cG9ydGFsLmRldi50aS5ydW1vbG9nLmNvbSIsImh0dHBzOi8vcGF0aW9kc3MtZGV2Lm9jaS50aS5ydW1vbG9nLmNvbS8qIiwiaHR0cHM6Ly9hcGktZGV2Lm9jaS50aS5ydW1vbG9nLmNvbS8qIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIGVtYWlsIHByb2ZpbGUiLCJjbGllbnRJZCI6InBhdGlvLWRzcyIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiY2xpZW50SG9zdCI6IjE4OS43NS4xNTQuOTUiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzZXJ2aWNlLWFjY291bnQtcGF0aW8tZHNzIiwiY2xpZW50QWRkcmVzcyI6IjE4OS43NS4xNTQuOTUifQ.CDzgtsJxJmy0fkSIjm75q8js7I2OZoaNa8MHpO6qtdGrZlgKeHUxn2K-4oc5VAIAuYXCxSh4GuvgSznV0nyIZK_QY4WGclpK7M6SO1C8fUkZGbS8SRN4SUjgYpN9K0P0rCsPDhn0ETfmMmLKWHiCHepe2qPElM3bBBcPQcVwnJy9MK9NtLuYcdhz-8tHVCD71gBdACXmT6FGVGGqSnIyji18XroEiXPdQal7kydT7Ig1rRokX20WaitDoYXmw_eYXTxIO9TVqYBG0LyKAlgkQ4xufPUMt4y9jBCcLFP8dXIEJF7_gl1iAvjTKAIki80LBNkWGsGF-Hl5cGVbaox84w'
  it('sucesso', () => {

    cy.request({
      method: 'POST',
      url: 'https://sso.ops-qas.ti.rumolog.com/auth/realms/tlg-dev/protocol/openid-connect/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`
      },
      body: {
        client_id: 'patio-dss',
        grant_type: 'client_credentials',
        client_secret: 'f3d45a3c-f484-478f-b9c9-8d436a0e47e6',
        scope: 'openid'
      }

    }).then((resposta) => {
      expect(resposta.status).to.equal(200)
      expect(resposta.body).to.have.property('access_token')
      expect(resposta.body).to.have.property('token_type', 'bearer')

    })
  })
})
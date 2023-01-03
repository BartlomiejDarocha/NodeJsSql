UPDATE [dbo].[events]
SET [eventTitle]=@eventTitle,
 [eventDescription]=@eventDescription,
 [startDate]=@startDate,
 [endDate]=@endDate,
 [aveneu]=@aveneu,
 [maxMembers]=@maxMembers
WHERE [eventId]=@eventId

SELECT [eventId]
      ,[eventTitle]
      ,[eventDescription]
      ,[startDate]
      ,[endDate]
      ,[aveneu]
      ,[maxMembers]
FROM [dbo].[events]
WHERE [eventId]=@eventId


## Running the app

### Dependencies
- .NET core: https://www.microsoft.com/net/core?WT.mc_id=Blog_CENews_Announce_CEA
- Node: https://nodejs.org/en/download/

### Install references
```bash
dotnet restore
npm install
```

Generate the database
```bash
cd [project_folder]\Punch.Data
dotnet ef database update -v -s ../Punch.Web
```

If you have to change any model (and thus the database), run the following commands:

```bash
cd [project_folder]\Punch.data
dotnet ef migrations add [Migration name] -s ../Punch.Web
# eg: dotnet ef migrations add FirstMigration -s ../Punch.Web
dotnet ef database update -v -s ../Punch.Web
```

### Executing the app

#### Visual Studio Code
- Open the folder with Visual Studio Code and press F5

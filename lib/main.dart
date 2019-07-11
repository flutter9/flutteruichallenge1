import 'package:flutter/material.dart';
import 'requestlist.dart';
import 'topscreen.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: MyHomePage(),
      debugShowCheckedModeBanner: false,
      theme: ThemeData(primaryColor: Colors.white),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        color: Colors.black12,
        child: Column(
          children: <Widget>[
            TopScreen(),
            Container(
              height: 50,
              padding: EdgeInsets.fromLTRB(32, 16, 32, 8),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  Text('Recent Updates', style: TextStyle(fontFamily: 'Montserrat'),),
                  Text('View All', style: TextStyle(fontWeight: FontWeight.bold,fontFamily: 'Montserrat'),)
                ],
              ),
            ),
            Container(
              height: 470,
              child: Requests(),
            ),
            
          ],
        ),
      ),
    );
  }
}
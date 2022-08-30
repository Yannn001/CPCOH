package com.example.CSPOH.model;

import lombok.*;
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Message {

    private int id;
    private String senderName;
    private String receiverName;
    private String message;
    private String date;
    private Status status;

}
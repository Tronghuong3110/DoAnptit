package com.doantotnghiepptit.GiaoLuuCauLong.model.dto;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data

public class Message {
    private Long id;
    private LocalDateTime modifiedAt;
    private LocalDateTime timeSend;
    private String status;
    private String content;
    private String typeMessage;
    private Boolean isSeen;

}

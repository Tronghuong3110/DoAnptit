package com.doantotnghiepptit.GiaoLuuCauLong.model.dto;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data

public class ChatRoom {
    private Long id;
    private String name;
    private LocalDateTime createAt;

}
